import * as express from "express";
import { BaseMiddleware, interfaces } from "inversify-express-utils";
import { Logger, MakeMiddlewareCallBack } from "../interfaces";

export const forbidden = (res: express.Response) => {
    res.status(403).send("Forbidden");
};

export const unauthorized = (res: express.Response) => {
    res.status(401).send("Unauthorized");
};

export const isAuthenticatedMiddlewareCb = (logger: Logger) => (
    httpContext: interfaces.HttpContext,
    next: express.NextFunction
) => {
    if (httpContext.user.isAuthenticated()) {
        next();
    } else {
        unauthorized(httpContext.response);
    }
};

export const isInRoleMiddlewareCb = (role: string) => (logger: Logger) => (
    httpContext: interfaces.HttpContext,
    next: express.NextFunction
) => {
    if (httpContext.user.isAuthenticated()) {
        if (httpContext.user.isInRole(role)) {
            next();
        } else {
            forbidden(httpContext.response);
        }
    } else {
        unauthorized(httpContext.response);
    }
};
