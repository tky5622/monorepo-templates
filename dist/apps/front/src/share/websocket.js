'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.socketAdapter = void 0
var tslib_1 = require('tslib')
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
var ws_1 = tslib_1.__importDefault(require('ws'))
var players = new Map() // playerId <-> player, where player is either a web-browser or a native webrtc player
var clientConfig = { type: 'config', peerConnectionOptions: {} }
function socketAdapter(httpPort, streamerPort, streamerServer) {
  ///ue4 -> this
  // const streamerServer = new WebSocket.Server({port: streamerPort, backlog: 1});
  var streamer // WebSocket connected to Streamer
  streamerServer.on('connection', function (ws, req) {
    console.log('Streamer connected: '.concat(req.connection.remoteAddress))
    ws.on('message', function onStreamerMessage(msg) {
      console.log('<- Streamer: '.concat(msg))
      try {
        msg = JSON.parse(msg)
      } catch (err) {
        console.error(
          'cannot parse Streamer message: '.concat(msg, '\nError: ').concat(err)
        )
        streamer.close(1008, 'Cannot parse')
        return
      }
      if (msg.type === 'ping') {
        streamer.send(JSON.stringify({ type: 'pong', time: msg.time }))
        return
      }
      var playerId = msg.playerId
      delete msg.playerId // no need to send it to the player
      var player = players.get(playerId)
      if (!player) {
        console.log(
          'dropped message '
            .concat(msg.type, ' as the player ')
            .concat(playerId, ' is not found')
        )
        return
      }
      if (msg.type === 'answer') {
        player.ws.send(JSON.stringify(msg))
      } else if (msg.type === 'iceCandidate') {
        player.ws.send(JSON.stringify(msg))
      } else if (msg.type === 'disconnectPlayer') {
        player.ws.close(1011 /* internal error */, msg.reason)
      } else {
        console.error('unsupported Streamer message type: '.concat(msg.type))
        streamer.close(1008, 'Unsupported message type')
      }
    })
    function onStreamerDisconnected() {
      disconnectAllPlayers()
    }
    ws.on('close', function (code, reason) {
      console.error(
        'streamer disconnected: '.concat(code, ' - ').concat(reason)
      )
      onStreamerDisconnected()
    })
    ws.on('error', function (error) {
      console.error('streamer connection error: '.concat(error))
      ws.close(1006 /* abnormal closure */, error)
      onStreamerDisconnected()
    })
    streamer = ws
    streamer.send(JSON.stringify(clientConfig))
  })
  //-------------this->----------------------------------
  var nextPlayerId = 100
  var playerServer = new ws_1.default.Server({ port: httpPort })
  console.log(
    'WebSocket listening to Players connections on :'.concat(httpPort)
  )
  playerServer.on('connection', function (ws, req) {
    // Reject connection if streamer is not connected
    if (!streamer || streamer.readyState !== 1 /* OPEN */) {
      ws.close(1013 /* Try again later */, 'Streamer is not connected')
      return
    }
    var playerId = ++nextPlayerId
    console.log(
      'player '
        .concat(playerId, ' (')
        .concat(req.connection.remoteAddress, ') connected')
    )
    players.set(playerId, { ws: ws, id: playerId })
    function sendPlayersCount() {
      var playerCountMsg = JSON.stringify({
        type: 'playerCount',
        count: players.size,
      })
      for (var _i = 0, _a = players.values(); _i < _a.length; _i++) {
        var p = _a[_i]
        p.ws.send(playerCountMsg)
      }
    }
    // Message type
    ws.on('message', function (msg) {
      console.log('<- player '.concat(playerId, ': ').concat(msg))
      try {
        msg = JSON.parse(msg)
      } catch (err) {
        console.error(
          'Cannot parse player '.concat(playerId, ' message: ').concat(err)
        )
        ws.close(1008, 'Cannot parse')
        return
      }
      if (msg.type === 'offer') {
        console.log('<- player '.concat(playerId, ': offer'))
        msg.playerId = playerId
        streamer.send(JSON.stringify(msg))
      } else if (msg.type === 'iceCandidate') {
        console.log('<- player '.concat(playerId, ': iceCandidate'))
        msg.playerId = playerId
        streamer.send(JSON.stringify(msg))
      } else if (msg.type === 'stats') {
        console.log('<- player '.concat(playerId, ': stats\n').concat(msg.data))
      } else if (msg.type === 'kick') {
        var playersCopy = new Map(players)
        for (var _i = 0, _a = playersCopy.values(); _i < _a.length; _i++) {
          var p = _a[_i]
          if (p.id !== playerId) {
            console.log('kicking player '.concat(p.id))
            p.ws.close(4000, 'kicked')
          }
        }
      } else {
        console.error(
          '<- player '
            .concat(playerId, ': unsupported message type: ')
            .concat(msg.type)
        )
        ws.close(1008, 'Unsupported message type')
        return
      }
    })
    function onPlayerDisconnected() {
      players.delete(playerId)
      streamer.send(
        JSON.stringify({ type: 'playerDisconnected', playerId: playerId })
      )
      sendPlayersCount()
    }
    ws.on('close', function (code, reason) {
      console.log(
        'player '
          .concat(playerId, ' connection closed: ')
          .concat(code, ' - ')
          .concat(reason)
      )
      onPlayerDisconnected()
    })
    ws.on('error', function (error) {
      console.error(
        'player '.concat(playerId, ' connection error: ').concat(error)
      )
      ws.close(1006 /* abnormal closure */, error)
      onPlayerDisconnected()
    })
    ws.send(JSON.stringify(clientConfig))
    sendPlayersCount()
  })
}
exports.socketAdapter = socketAdapter
function disconnectAllPlayers(code, reason) {
  var clone = new Map(players)
  for (var _i = 0, _a = clone.values(); _i < _a.length; _i++) {
    var player = _a[_i]
    player.ws.close(code, reason)
  }
}
//# sourceMappingURL=websocket.js.map
