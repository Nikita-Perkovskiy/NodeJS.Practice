import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller.js";
import { LoggerService } from "../logger/logger.service.js";

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
    this.bindRoutes([
      { path: "/register", method: "post", funcs: this.register },
      { path: "/login", method: "post", funcs: this.login },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "login");
  }
  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "register");
  }
}
