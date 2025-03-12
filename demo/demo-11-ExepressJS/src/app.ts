import express, { Express } from "express";
import { userRouter } from "./users/users.js";
import { Server } from "http";

export class App {
  app: Express;
  port: number;
  server?: Server;
  constructor() {
    this.app = express();
    this.port = 8000;
  }
  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    console.log(`Server is work - http://localhost:${this.port}`);
  }
  useRoutes() {
    this.app.use("./users", userRouter);
  }
}
