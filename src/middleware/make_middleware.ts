import * as express from "express";
import { inject, injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import { ZAFIRO_TYPE } from "../constants/types";
import { Logger, MakeMiddlewareCallBack } from "../interfaces";

export const makeMiddleware = (cb: MakeMiddlewareCallBack) => {

    class CustomMiddleware extends BaseMiddleware {
        @inject(ZAFIRO_TYPE.Logger) private readonly _logger: Logger;
        public handler(
            req: express.Request,
            res: express.Response,
            next: express.NextFunction
        ): void {
            cb(this._logger)(this.httpContext, next);
        }
    }

    return injectable()(CustomMiddleware);

};
