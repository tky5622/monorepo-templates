/*
 * This is only a minimal custom server to get started.
 * You may want to consider using Express or another server framework, and enable security features such as CORS.
 *
 * For more examples, see the Next.js repo:
 * - Express: https://github.com/vercel/next.js/tree/canary/examples/custom-server-express
 * - Hapi: https://github.com/vercel/next.js/tree/canary/examples/custom-server-hapi
 */

import express, { Express, Request, Response } from "express";
import { createServer, Server } from "http";
import next from 'next';
import * as path from 'path';
import WebSocket from 'ws';
// import { Server as socketioServer } from "socket.io";
import { socketAdapter } from '@standiart/pixel-streaming-editor';
import { parse } from 'url';

const HTTP_PORT = 80;
const STREAMER_PORT = 8888;


// Next.js server options:
// - The environment variable is set by `@nrwl/next:server` when running the dev server.
// - The fallback `__dirname` is for production builds.
// - Feel free to change this to suit your needs.
const dir = process.env.NX_NEXT_DIR || path.join(__dirname, '..');
const dev = process.env.NODE_ENV === 'development';

// HTTP Server options:
// - Feel free to change this to suit your needs.
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT ? parseInt(process.env.PORT) : 4200;

async function main() {
  const nextApp = next({ dev, dir });
  const handle = nextApp.getRequestHandler();

  // try function
  await nextApp.prepare();

  const expressApp: Express = express();
  const server: Server = createServer(expressApp);

  const streamerServer = new WebSocket.Server({server: server, port: STREAMER_PORT, backlog: 1});
  socketAdapter(HTTP_PORT, STREAMER_PORT, streamerServer)


  // handle next request
  expressApp.all("*", (req: Request, res: Response) => {
      const parsedUrl = parse(req.url, true);

      return handle(req, res, parsedUrl);
  });

  // connect scket
  // const io: socketioServer = new socketioServer();
  // io.attach(server);

  server.listen(port, hostname);



  console.log(`[ ready ] on http://${hostname}:${port}`)
}

main().catch((err) => {
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
