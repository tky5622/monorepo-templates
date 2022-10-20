/* eslint-disable */
// Copyright Epic Games, Inc. All Rights Reserved.
type Config = {startVideoMuted?:boolean, peerConnectionOptions?:{}, autoPlayAudio?: boolean; }
type Stat = {
    bytesReceivedStart: any;
    framesDecodedStart: any;
    timestampStart: any;
    bitrate: number;
    lowBitrate: any;
    highBitrate: any;
    avgBitrate: number;
    framerate: number;
    lowFramerate: any;
    highFramerate: any;
    avgframerate: number;
    framesDroppedPercentage: number;
    frameHeightStart: any;
    frameWidthStart: any;
    receiveToCompositeMs: any; type: string; isRemote: any; mediaType: string; id: string; timestamp: any; bytesReceived: any; framesDecoded: any; packetsLost: any; trackIdentifier: string; kind: string; framesDropped: number; framesReceived: number; frameHeight: any; frameWidth: any; hasOwnProperty: (arg0: string) => any; currentRoundTripTime: number;
}
export default function(parOptions: Config){
    parOptions = typeof parOptions !== 'undefined' ? parOptions : {};

    var self = this;
    const urlParams = new URLSearchParams(window.location.search);

    //**********************
    //Config setup
    //**********************
    this.cfg = typeof parOptions.peerConnectionOptions !== 'undefined' ? parOptions.peerConnectionOptions : {};
    this.cfg.sdpSemantics = 'unified-plan';

    // If this is true in Chrome 89+ SDP is sent that is incompatible with UE Pixel Streaming 4.26 and below.
    // However 4.27 Pixel Streaming does not need this set to false as it supports `offerExtmapAllowMixed`.
    // tdlr; uncomment this line for older versions of Pixel Streaming that need Chrome 89+.
    this.cfg.offerExtmapAllowMixed = false;

    this.forceTURN = urlParams.has('ForceTURN');
    if(this.forceTURN)
    {
        console.log("Forcing TURN usage by setting ICE Transport Policy in peer connection config.");
        this.cfg.iceTransportPolicy = "relay";
    }

    this.cfg.bundlePolicy = "balanced";
    this.forceMaxBundle = urlParams.has('ForceMaxBundle');
    if(this.forceMaxBundle)
    {
        this.cfg.bundlePolicy = "max-bundle";
    }

    //**********************
    //Variables
    //**********************
    this.pcClient = null;
    this.dcClient = null;
    this.tnClient = null;

    this.sdpConstraints = {
      offerToReceiveAudio: 1, //Note: if you don't need audio you can get improved latency by turning this off.
      offerToReceiveVideo: 1,
      voiceActivityDetection: false
    };

    // See https://www.w3.org/TR/webrtc/#dom-rtcdatachannelinit for values (this is needed for Firefox to be consistent with Chrome.)
    this.dataChannelOptions = {ordered: true};

    // This is useful if the video/audio needs to autoplay (without user input) as browsers do not allow autoplay non-muted of sound sources without user interaction.
    this.startVideoMuted = typeof parOptions.startVideoMuted !== 'undefined' ? parOptions.startVideoMuted : false;
    this.autoPlayAudio = typeof parOptions.autoPlayAudio !== 'undefined' ? parOptions.autoPlayAudio : true;

    // To force mono playback of WebRTC audio
    this.forceMonoAudio = urlParams.has('ForceMonoAudio');
    if(this.forceMonoAudio){
        console.log("Will attempt to force mono audio by munging the sdp in the browser.")
    }

    // To enable mic in browser use SSL/localhost and have ?useMic in the query string.
    this.useMic = urlParams.has('useMic');
    if(!this.useMic){
        console.log("Microphone access is not enabled. Pass ?useMic in the url to enable it.");
    }

    // When ?useMic check for SSL or localhost
    let isLocalhostConnection = location.hostname === "localhost" || location.hostname === "127.0.0.1";
    let isHttpsConnection = location.protocol === 'https:';
    if(this.useMic && !isLocalhostConnection && !isHttpsConnection)
    {
        this.useMic = false;
        console.error("Microphone access in the browser will not work if you are not on HTTPS or localhost. Disabling mic access.");
        console.error("For testing you can enable HTTP microphone access Chrome by visiting chrome://flags/ and enabling 'unsafely-treat-insecure-origin-as-secure'");
    }

    // Prefer SFU or P2P connection
    this.preferSFU = urlParams.has('preferSFU');
    console.log(this.preferSFU ?
        "The browser will signal it would prefer an SFU connection. Remove ?preferSFU from the url to signal for P2P usage." :
        "The browser will signal for a P2P connection. Pass ?preferSFU in the url to signal for SFU usage.");

    // Latency tester
    this.latencyTestTimings =
    {
        TestStartTimeMs: null,
        UEReceiptTimeMs: null,
        UEEncodeMs: null,
        UECaptureToSendMs: null,
        UETransmissionTimeMs: null,
        BrowserReceiptTimeMs: null,
        FrameDisplayDeltaTimeMs: null,
        Reset: function()
        {
            this.TestStartTimeMs = null;
            this.UEReceiptTimeMs = null;
            this.UEEncodeMs = null,
            this.UECaptureToSendMs = null,
            this.UETransmissionTimeMs = null;
            this.BrowserReceiptTimeMs = null;
            this.FrameDisplayDeltaTimeMs = null;
        },
        SetUETimings: function(UETimings: { ReceiptTimeMs: any; EncodeMs: any; CaptureToSendMs: any; TransmissionTimeMs: any; })
        {
            this.UEReceiptTimeMs = UETimings.ReceiptTimeMs;
            this.UEEncodeMs = UETimings.EncodeMs,
            this.UECaptureToSendMs = UETimings.CaptureToSendMs,
            this.UETransmissionTimeMs = UETimings.TransmissionTimeMs;
            this.BrowserReceiptTimeMs = Date.now();
            this.OnAllLatencyTimingsReady(this);
        },
        SetFrameDisplayDeltaTime: function(DeltaTimeMs: number)
        {
            if(this.FrameDisplayDeltaTimeMs == null)
            {
                this.FrameDisplayDeltaTimeMs = Math.round(DeltaTimeMs);
                this.OnAllLatencyTimingsReady(this);
            }
        },
        OnAllLatencyTimingsReady: function(Timings: any){}
    }

    //**********************
    //Functions
    //**********************

    //Create Video element and expose that as a parameter
    this.createWebRtcVideo = function() {
        var video = document.createElement('video');

        video.id = "streamingVideo";
        video.playsInline = true;
        video.autoplay = true;
        video.disablePictureInPicture = true;
        video.muted = self.startVideoMuted;

        console.log("streamingVideo")

        video.addEventListener('loadedmetadata', function(e){
            console.log("self.onVideoInitialised", self.onVideoInitialised)

            if(self.onVideoInitialised){
                self.onVideoInitialised();
            }
        }, true);

        // Check if request video frame callback is supported
        if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
            // The API is supported!
            let onVideoFrameReady: VideoFrameRequestCallback;
            onVideoFrameReady = (now: any, metadata: { receiveTime: number; expectedDisplayTime: any; presentationTime: number; }) => {

                if(metadata.receiveTime && metadata.expectedDisplayTime)
                {
                    const receiveToCompositeMs = metadata.presentationTime - metadata.receiveTime;
                    self.aggregatedStats.receiveToCompositeMs = receiveToCompositeMs;
                }


                // Re-register the callback to be notified about the next frame.
                video.requestVideoFrameCallback(onVideoFrameReady);
            };

            // Initially register the callback to be notified about the first frame.
            video.requestVideoFrameCallback(onVideoFrameReady);
        }

        return video;
    }

    this.createWebRtcAudio = function() {
        var audio = document.createElement('audio');
        audio.id = 'streamingAudio';

        return audio;
    }

    this.video = this.createWebRtcVideo();
    this.audio = this.createWebRtcAudio();
    this.availableVideoStreams = new Map();
    let onsignalingstatechange: (state: any) => void;
    let oniceconnectionstatechange: (state: any) => void;
    let onicegatheringstatechange: (state: any) => void;
    let handleOnTrack: (e: any) => void;
    let handleOnAudioTrack: (audioMediaStream: any) => void;
    let onDataChannel: (dataChannelEvent: any) => void;
    let createDataChannel: (arg0: any, arg1: string, arg2: any) => any;
    let setupDataChannelCallbacks: (datachannel: any) => any;
    let onicecandidate: (e: any) => void
    let handleCreateOffer: (pc: any) => void
    let mungeSDPOffer: (offer: any) => void
    let setupPeerConnection: (pc: any) => void
    let generateAggregatedStatsFunction: () => any
    let setupTransceiversAsync: (arg0: any) => Promise<any>



    onsignalingstatechange = function(state: { srcElement: { signalingState: any; }; }) {
        console.info('Signaling state change. |', state.srcElement.signalingState, "|")
    };

    oniceconnectionstatechange = function(state: { srcElement: { iceConnectionState: any; }; }) {
        console.info('Browser ICE connection |', state.srcElement.iceConnectionState, '|')
    };

    onicegatheringstatechange = function(state: { srcElement: { iceGatheringState: any; }; }) {
        console.info('Browser ICE gathering |', state.srcElement.iceGatheringState, '|')
    };

    handleOnTrack = function(e: { track: { kind: string; id: string; readyState: string; onunmute: () => void; }; streams: any[]; }) {
        if (e.track)
        {
            console.log('Got track. | Kind=' + e.track.kind + ' | Id=' + e.track.id + ' | readyState=' + e.track.readyState + ' |');
        }

        if(e.track.kind == "audio")
        {
            handleOnAudioTrack(e.streams[0]);
            return;
        }
        else(e.track.kind == "video")
        {
            for (const s of e.streams) {
                if (!self.availableVideoStreams.has(s.id)) {
                    self.availableVideoStreams.set(s.id, s);
                }
            }
            console.log(e, e.streams, e.streams[0], 'console log streams')

            self.video.srcObject = e.streams[0];

            // All tracks are added "muted" by WebRTC/browser and become unmuted when media is being sent
            e.track.onunmute = () => {
                self.video.srcObject = e.streams[0];
                self.onNewVideoTrack(e.streams);
            }
        }
    };

    handleOnAudioTrack = function(audioMediaStream: any)
    {
        // do nothing the video has the same media stream as the audio track we have here (they are linked)
        if(self.video.srcObject == audioMediaStream)
        {
            return;
        }
        // video element has some other media stream that is not associated with this audio track
        else if(self.video.srcObject && self.video.srcObject !== audioMediaStream)
        {
           self.audio.srcObject = audioMediaStream;
        }

    }

    onDataChannel = function(dataChannelEvent: { channel: any; }){
        // This is the primary data channel code path when we are "receiving"
        console.log("Data channel created for us by browser as we are a receiving peer.");
        self.dcClient = dataChannelEvent.channel;
        setupDataChannelCallbacks(self.dcClient);
    }

    createDataChannel = function(pc: { createDataChannel: (arg0: any, arg1: any) => any; }, label: any, options: any){
        // This is the primary data channel code path when we are "offering"
        let datachannel = pc.createDataChannel(label, options);
        console.log(`Created datachannel (${label})`);
        setupDataChannelCallbacks(datachannel);
        return datachannel;
    }

    setupDataChannelCallbacks = function(datachannel: { binaryType: string; onopen: (e: any) => void; onclose: (e: any) => void; onmessage: (e: any) => void; onerror: (e: any) => void; }) {
        try {
            // Inform browser we would like binary data as an ArrayBuffer (FF chooses Blob by default!)
            datachannel.binaryType = "arraybuffer";

            datachannel.onopen = function (e: any) {
              console.log("Data channel connected");
              if(self.onDataChannelConnected){
                self.onDataChannelConnected();
              }
            }

            datachannel.onclose = function (e: any) {
                console.log("Data channel connected", e);
            }

            datachannel.onmessage = function (e: { data: any; }) {
                if (self.onDataChannelMessage){
                    self.onDataChannelMessage(e.data);
                }
            }

            datachannel.onerror = function (e: any) {
                console.error("Data channel error", e);
            }

            return datachannel;
        } catch (e) {
            console.warn('No data channel', e);
            return null;
        }
    }

    onicecandidate = function (e: { candidate: any; }) {
        let candidate = e.candidate;
        if (candidate && candidate.candidate) {
            console.log("%c[Browser ICE candidate]", "background: violet; color: black", "| Type=", candidate.type, "| Protocol=", candidate.protocol, "| Address=", candidate.address, "| Port=", candidate.port, "|");
            self.onWebRtcCandidate(candidate);
        }
    };

    handleCreateOffer = function (pc: { createOffer: (arg0: any) => Promise<any>; setLocalDescription: (arg0: any) => void; }) {
        console.warn('handleCreateOffer')
        pc.createOffer(self.sdpConstraints).then(function (offer: any) {

            // Munging is where we modifying the sdp string to set parameters that are not exposed to the browser's WebRTC API
            mungeSDPOffer(offer);

            // Set our munged SDP on the local peer connection so it is "set" and will be send across
            pc.setLocalDescription(offer);
            if (self.onWebRtcOffer) {
                self.onWebRtcOffer(offer);
            }
        },
        function () { console.warn("Couldn't create offer") });
    }

    mungeSDPOffer = function (offer: { sdp: string; }) {

        let audioSDP = '';

        // set max bitrate to highest bitrate Opus supports
        audioSDP += 'maxaveragebitrate=510000;';

        if(self.useMic){
            // set the max capture rate to 48khz (so we can send high quality audio from mic)
            audioSDP += 'sprop-maxcapturerate=48000;';
        }

        // Force mono or stereo based on whether ?forceMono was passed or not
        audioSDP += self.forceMonoAudio ? 'sprop-stereo=0;stereo=0;' : 'sprop-stereo=1;stereo=1;';

        // enable in-band forward error correction for opus audio
        audioSDP += 'useinbandfec=1';

        // We use the line 'useinbandfec=1' (which Opus uses) to set our Opus specific audio parameters.
        offer.sdp = offer.sdp.replace('useinbandfec=1', audioSDP);
    }

    setupPeerConnection = function (pc: { onsignalingstatechange: any; oniceconnectionstatechange: any; onicegatheringstatechange: any; ontrack: any; onicecandidate: any; ondatachannel: any; }) {
        //Setup peerConnection events
        console.warn('setupPeerConnection work')
        pc.onsignalingstatechange = onsignalingstatechange;
        pc.oniceconnectionstatechange = oniceconnectionstatechange;
        pc.onicegatheringstatechange = onicegatheringstatechange;

        pc.ontrack = handleOnTrack;
        pc.onicecandidate = onicecandidate;
        pc.ondatachannel = onDataChannel;
        console.warn(pc.ondatachannel, onDataChannel)
    };

    generateAggregatedStatsFunction = function(){
        if(!self.aggregatedStats)
            self.aggregatedStats = {};

        return function(stats: Stat[]){
            //console.log('Printing Stats');

            let newStat = {} as Stat;

            stats.forEach((stat: Stat) => {
//                    console.log(JSON.stringify(stat, undefined, 4));
                if (stat.type == 'inbound-rtp'
                    && !stat.isRemote
                    && (stat.mediaType == 'video' || stat.id.toLowerCase().includes('video'))) {

                    newStat.timestamp = stat.timestamp;
                    newStat.bytesReceived = stat.bytesReceived;
                    newStat.framesDecoded = stat.framesDecoded;
                    newStat.packetsLost = stat.packetsLost;
                    newStat.bytesReceivedStart = self.aggregatedStats && self.aggregatedStats.bytesReceivedStart ? self.aggregatedStats.bytesReceivedStart : stat.bytesReceived;
                    newStat.framesDecodedStart = self.aggregatedStats && self.aggregatedStats.framesDecodedStart ? self.aggregatedStats.framesDecodedStart : stat.framesDecoded;
                    newStat.timestampStart = self.aggregatedStats && self.aggregatedStats.timestampStart ? self.aggregatedStats.timestampStart : stat.timestamp;

                    if(self.aggregatedStats && self.aggregatedStats.timestamp){
                        if(self.aggregatedStats.bytesReceived){
                            // bitrate = bits received since last time / number of ms since last time
                            //This is automatically in kbits (where k=1000) since time is in ms and stat we want is in seconds (so a '* 1000' then a '/ 1000' would negate each other)
                            newStat.bitrate = 8 * (newStat.bytesReceived - self.aggregatedStats.bytesReceived) / (newStat.timestamp - self.aggregatedStats.timestamp);
                            newStat.bitrate = Math.floor(newStat.bitrate);
                            newStat.lowBitrate = self.aggregatedStats.lowBitrate && self.aggregatedStats.lowBitrate < newStat.bitrate ? self.aggregatedStats.lowBitrate : newStat.bitrate
                            newStat.highBitrate = self.aggregatedStats.highBitrate && self.aggregatedStats.highBitrate > newStat.bitrate ? self.aggregatedStats.highBitrate : newStat.bitrate
                        }

                        if(self.aggregatedStats.bytesReceivedStart){
                            newStat.avgBitrate = 8 * (newStat.bytesReceived - self.aggregatedStats.bytesReceivedStart) / (newStat.timestamp - self.aggregatedStats.timestampStart);
                            newStat.avgBitrate = Math.floor(newStat.avgBitrate);
                        }

                        if(self.aggregatedStats.framesDecoded){
                            // framerate = frames decoded since last time / number of seconds since last time
                            newStat.framerate = (newStat.framesDecoded - self.aggregatedStats.framesDecoded) / ((newStat.timestamp - self.aggregatedStats.timestamp) / 1000);
                            newStat.framerate = Math.floor(newStat.framerate);
                            newStat.lowFramerate = self.aggregatedStats.lowFramerate && self.aggregatedStats.lowFramerate < newStat.framerate ? self.aggregatedStats.lowFramerate : newStat.framerate
                            newStat.highFramerate = self.aggregatedStats.highFramerate && self.aggregatedStats.highFramerate > newStat.framerate ? self.aggregatedStats.highFramerate : newStat.framerate
                        }

                        if(self.aggregatedStats.framesDecodedStart){
                            newStat.avgframerate = (newStat.framesDecoded - self.aggregatedStats.framesDecodedStart) / ((newStat.timestamp - self.aggregatedStats.timestampStart) / 1000);
                            newStat.avgframerate = Math.floor(newStat.avgframerate);
                        }
                    }
                }

                //Read video track stats
                if(stat.type == 'track' && (stat.trackIdentifier == 'video_label' || stat.kind == 'video')) {
                    newStat.framesDropped = stat.framesDropped;
                    newStat.framesReceived = stat.framesReceived;
                    newStat.framesDroppedPercentage = stat.framesDropped / stat.framesReceived * 100;
                    newStat.frameHeight = stat.frameHeight;
                    newStat.frameWidth = stat.frameWidth;
                    newStat.frameHeightStart = self.aggregatedStats && self.aggregatedStats.frameHeightStart ? self.aggregatedStats.frameHeightStart : stat.frameHeight;
                    newStat.frameWidthStart = self.aggregatedStats && self.aggregatedStats.frameWidthStart ? self.aggregatedStats.frameWidthStart : stat.frameWidth;
                }

                if(stat.type =='candidate-pair' && stat.hasOwnProperty('currentRoundTripTime') && stat.currentRoundTripTime != 0){
                    newStat.currentRoundTripTime = stat.currentRoundTripTime;
                }
            });


            if(self.aggregatedStats.receiveToCompositeMs)
            {
                newStat.receiveToCompositeMs = self.aggregatedStats.receiveToCompositeMs;
                self.latencyTestTimings.SetFrameDisplayDeltaTime(self.aggregatedStats.receiveToCompositeMs);
            }

            self.aggregatedStats = newStat;

            if(self.onAggregatedStats)
                self.onAggregatedStats(newStat)
        }
    };

    setupTransceiversAsync = async function(pc: { getTransceivers: () => { (): any; new(): any; length: number; }; addTransceiver: (arg0: string | MediaStreamTrack, arg1: { direction: string; }) => void; }){

        let hasTransceivers = pc.getTransceivers().length > 0;

        // Setup a transceiver for getting UE video
        pc.addTransceiver("video", { direction: "recvonly" });

        // Setup a transceiver for sending mic audio to UE and receiving audio from UE
        if(!self.useMic)
        {
            pc.addTransceiver("audio", { direction: "recvonly" });
        }
        else
        {
            let audioSendOptions = self.useMic ?
            {
                autoGainControl: false,
                channelCount: 1,
                echoCancellation: false,
                latency: 0,
                noiseSuppression: false,
                sampleRate: 48000,
                volume: 1.0
            } : false;

            // Note using mic on android chrome requires SSL or chrome://flags/ "unsafely-treat-insecure-origin-as-secure"
            const stream = await navigator.mediaDevices.getUserMedia({video: false, audio: audioSendOptions});
            if(stream)
            {
                if(hasTransceivers){
                    for(let transceiver of pc.getTransceivers()){
                        if(transceiver && transceiver.receiver && transceiver.receiver.track && transceiver.receiver.track.kind === "audio")
                        {
                            for (const track of stream.getTracks()) {
                                if(track.kind && track.kind == "audio")
                                {
                                    transceiver.sender.replaceTrack(track);
                                    transceiver.direction = "sendrecv";
                                }
                            }
                        }
                    }
                }
                else
                {
                    for (const track of stream.getTracks()) {
                        if(track.kind && track.kind == "audio")
                        {
                            pc.addTransceiver(track, { direction: "sendrecv" });
                        }
                    }
                }
            }
            else
            {
                pc.addTransceiver("audio", { direction: "recvonly" });
            }
        }
    };


    //**********************
    //Public functions
    //**********************

    this.setVideoEnabled = function(enabled: any) {
        self.video.srcObject.getTracks().forEach((track: { enabled: any; }) => track.enabled = enabled);
    }

    this.startLatencyTest = function(onTestStarted: (arg0: any) => void) {
        // Can't start latency test without a video element
        if(!self.video)
        {
            return;
        }

        self.latencyTestTimings.Reset();
        self.latencyTestTimings.TestStartTimeMs = Date.now();
        onTestStarted(self.latencyTestTimings.TestStartTimeMs);
    }

    //This is called when revceiving new ice candidates individually instead of part of the offer
    this.handleCandidateFromServer = function(iceCandidate: RTCIceCandidateInit | undefined) {
        let candidate = new RTCIceCandidate(iceCandidate);

        console.log("%c[Unreal ICE candidate]", "background: pink; color: black" ,"| Type=", candidate.type, "| Protocol=", candidate.protocol, "| Address=", candidate.address, "| Port=", candidate.port, "|");

        // if forcing TURN, reject any candidates not relay
        if(self.forceTURN)
        {
            // check if no relay address is found, if so, we are assuming it means no TURN server
            if(candidate.candidate.indexOf("relay") < 0) {
                console.warn("Dropping candidate because it was not TURN relay.", "| Type=", candidate.type, "| Protocol=", candidate.protocol, "| Address=", candidate.address, "| Port=", candidate.port, "|")
                return;
            }
        }

        self.pcClient.addIceCandidate(candidate).catch(function(e: any){
            console.error("Failed to add ICE candidate", e);
        });
    };

    //Called externaly to create an offer for the server
    this.createOffer = function() {
        if(self.pcClient){
            console.log("Closing existing PeerConnection")
            self.pcClient.close();
            self.pcClient = null;
        }
        self.pcClient = new RTCPeerConnection(self.cfg);
        console.warn('create offer', self.pcClient)

        setupPeerConnection(self.pcClient);

        setupTransceiversAsync(self.pcClient).finally(function()
        {
            self.dcClient = createDataChannel(self.pcClient, 'cirrus', self.dataChannelOptions);
            handleCreateOffer(self.pcClient);
        });

    };

    //Called externaly when an offer is received from the server
    this.receiveOffer = function(offer: RTCSessionDescriptionInit) {
        var offerDesc = new RTCSessionDescription(offer);

        if (!self.pcClient){
            console.log("Creating a new PeerConnection in the browser.")
            self.pcClient = new RTCPeerConnection(self.cfg);
            setupPeerConnection(self.pcClient);

            // Put things here that happen post transceiver setup
            self.pcClient.setRemoteDescription(offerDesc)
            .then(() =>
            {
                setupTransceiversAsync(self.pcClient).finally(function(){
                self.pcClient.createAnswer()
                .then((answer: any) => {
                    mungeSDPOffer(answer);
                    return self.pcClient.setLocalDescription(answer);
                })
                .then(() => {
                    if (self.onWebRtcAnswer) {
                        self.onWebRtcAnswer(self.pcClient.currentLocalDescription);
                    }
                })
                .then(()=> {
                    let receivers = self.pcClient.getReceivers();
                    for(let receiver of receivers)
                    {
                        receiver.playoutDelayHint = 0;
                    }
                })
                .catch((error: any) => console.error("createAnswer() failed:", error));
                });
            });
        }
    };

    //Called externaly when an answer is received from the server
    this.receiveAnswer = function(answer: RTCSessionDescriptionInit) {
        var answerDesc = new RTCSessionDescription(answer);
        self.pcClient.setRemoteDescription(answerDesc);

        let receivers = self.pcClient.getReceivers();
        for(let receiver of receivers)
        {
            receiver.playoutDelayHint = 0;
        }
    };

    this.close = function(){
        if(self.pcClient){
            console.log("Closing existing peerClient")
            self.pcClient.close();
            self.pcClient = null;
        }
        if(self.aggregateStatsIntervalId)
            clearInterval(self.aggregateStatsIntervalId);
    }

    //Sends data across the datachannel
    this.send = function(data: any){
        if(self.dcClient && self.dcClient.readyState == 'open'){
            //console.log('Sending data on dataconnection', self.dcClient)
            self.dcClient.send(data);
        }
    };

    this.getStats = function(onStats: (arg0: any) => void){
        if(self.pcClient && onStats){
            self.pcClient.getStats(null).then((stats: any) => {
                onStats(stats);
            });
        }
    }

    this.aggregateStats = function(checkInterval: number | undefined){
        let calcAggregatedStats = generateAggregatedStatsFunction();
        let printAggregatedStats = () => { self.getStats(calcAggregatedStats); }
        self.aggregateStatsIntervalId = setInterval(printAggregatedStats, checkInterval);
    }
}