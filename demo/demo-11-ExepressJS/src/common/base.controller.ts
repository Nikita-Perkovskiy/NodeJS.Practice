import { Response, Router } from "express";
import { LoggerService } from "../logger/logger.service.js";
import { IControllerRoute, ExpressReturnType } from "./route.interface.js";
export { Router } from "express";

export abstract class BaseController {
  private readonly _router: Router;
  constructor(private logger: LoggerService) {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  public send<T>(res: Response, code: number, message: T): ExpressReturnType {
    res.type("application/json");
    return res.status(code).json(message);
  }

  public ok<T>(res: Response, message: T): ExpressReturnType {
    return this.send<T>(res, 200, message);
  }

  public created(res: Response) {
    return res.sendStatus(201);
  }
  protected bindRoutes(routes: IControllerRoute[]) {
    for (const route of routes) {
      this.logger.log(`[${route.method}] ${route.path}`);
      const handler = route.funcs.bind(this);
      this.router[route.method](route.path, handler);
    }
  }
}
