// import { WebSocket } from 'ws';
import { Server, createServer } from "http";
import next, { NextApiHandler, NextApiRequest } from "next";
import { Server as socketioServer, Socket } from "socket.io";
import express, { Express, Request, Response } from "express";
import { socketAdapter } from '@pixel-streaming-editor'
// import idGenerator from "../helpers/id-generator";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle: NextApiHandler = app.getRequestHandler();

app.prepare().then(async () => {
  const expressApp: Express = express();
  const server: Server = createServer(expressApp);
  const io: socketioServer = new socketioServer();

  io.attach(server);

  expressApp.get("/socket", async (_: Request, res: Response) => {
    res.send("hello world");
  });

  io.on("connection", (socket: Socket) => {
    socket.on("join", (roomId) => {
      socket.join(roomId);
      console.log("joined room!");
    });
    socket.on("message", (data) => {
      io.to(data.roomId).emit("message", {
        message: data.message,
        username: data.username,
        // id: `${data.username}-${idGenerator()}`
      });
    });
  });
  socketAdapter()

  expressApp.all("*", (req: NextApiRequest, res: any) => handle(req, res));
  server.listen(port);
});
