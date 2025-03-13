import { Logger } from "tslog";
import express, { Express } from "express";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service.js";
import { UserController } from "./users/user.controller.js";

export class App {
  app: Express;
  port: number;
  server?: Server;
  logger: LoggerService;
  userController?: UserController;
  constructor(logger: LoggerService, userController: UserController) {
    this.app = express();
    this.port = 8000;
    this.logger = new LoggerService();
    this.userController = userController;
  }
  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server is work - http://localhost:${this.port}`);
  }
  useRoutes() {
    this.app.use("/users", this.userController!.router);
  }
}
