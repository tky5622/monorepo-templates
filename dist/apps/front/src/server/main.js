"use strict";
/*
 * This is only a minimal custom server to get started.
 * You may want to consider using Express or another server framework, and enable security features such as CORS.
 *
 * For more examples, see the Next.js repo:
 * - Express: https://github.com/vercel/next.js/tree/canary/examples/custom-server-express
 * - Hapi: https://github.com/vercel/next.js/tree/canary/examples/custom-server-hapi
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var http_1 = require("http");
var next_1 = tslib_1.__importDefault(require("next"));
var path = tslib_1.__importStar(require("path"));
var ws_1 = tslib_1.__importDefault(require("ws"));
// import { Server as socketioServer } from "socket.io";
var url_1 = require("url");
var websocket_1 = require("../../share/websocket");
var HTTP_PORT = 80;
var STREAMER_PORT = 8888;
// Next.js server options:
// - The environment variable is set by `@nrwl/next:server` when running the dev server.
// - The fallback `__dirname` is for production builds.
// - Feel free to change this to suit your needs.
var dir = process.env.NX_NEXT_DIR || path.join(__dirname, '..');
var dev = process.env.NODE_ENV === 'development';
// HTTP Server options:
// - Feel free to change this to suit your needs.
var hostname = process.env.HOST || 'localhost';
var port = process.env.PORT ? parseInt(process.env.PORT) : 4200;
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var nextApp, handle, expressApp, server, streamerServer;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nextApp = (0, next_1.default)({ dev: dev, dir: dir });
                    handle = nextApp.getRequestHandler();
                    // try function
                    return [4 /*yield*/, nextApp.prepare()];
                case 1:
                    // try function
                    _a.sent();
                    expressApp = (0, express_1.default)();
                    server = (0, http_1.createServer)(expressApp);
                    streamerServer = new ws_1.default.Server({ server: server, port: STREAMER_PORT, backlog: 1 });
                    (0, websocket_1.socketAdapter)(HTTP_PORT, STREAMER_PORT, streamerServer);
                    // handle next request
                    expressApp.all("*", function (req, res) {
                        var parsedUrl = (0, url_1.parse)(req.url, true);
                        return handle(req, res, parsedUrl);
                    });
                    // connect scket
                    // const io: socketioServer = new socketioServer();
                    // io.attach(server);
                    server.listen(port, hostname);
                    console.log("[ ready ] on http://".concat(hostname, ":").concat(port));
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (err) {
    console.error(err);
    process.exit(1);
});
// // import { WebSocket } from 'ws';
// import { Server, createServer } from "http";
// import next, { NextApiHandler, NextApiRequest } from "next";
// import { Server as socketioServer, Socket } from "socket.io";
// import express, { Express, Request, Response } from "express";
// import { socketAdapter } from '@pixel-streaming-editor'
// // import idGenerator from "../helpers/id-generator";
// const port = parseInt(process.env.PORT || "3000", 10);
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle: NextApiHandler = app.getRequestHandler();
// app.prepare().then(async () => {
//   const expressApp: Express = express();
//   const server: Server = createServer(expressApp);
//   const io: socketioServer = new socketioServer();
//   io.attach(server);
//   expressApp.get("/socket", async (_: Request, res: Response) => {
//     res.send("hello world");
//   });
//   io.on("connection", (socket: Socket) => {
//     socket.on("join", (roomId) => {
//       socket.join(roomId);
//       console.log("joined room!");
//     });
//     socket.on("message", (data) => {
//       io.to(data.roomId).emit("message", {
//         message: data.message,
//         username: data.username,
//         // id: `${data.username}-${idGenerator()}`
//       });
//     });
//   });
//   socketAdapter()
//   expressApp.all("*", (req: NextApiRequest, res: any) => handle(req, res));
//   server.listen(port);
// });
//# sourceMappingURL=main.js.map