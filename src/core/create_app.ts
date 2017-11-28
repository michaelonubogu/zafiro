import * as express from "express";
import { Container } from "inversify";
import * as path from "path";
import { InversifyExpressServer } from "inversify-express-utils";
import { coreBindings }  from "../config/ioc_config";
import bindControllers from "../ioc/bind_controllers";
import bindRepositories from "../ioc/bind_repositories";
import * as interfaces from "../interfaces";

export default async function createApp(
    options: interfaces.AppOptions
) {

    // The frameworks expects the controllers and entities
    // to be unders /src/controllers and /src/entitites
    // We need to find that folder from the zafiro folder
    // at /node_modules/zafiro/lib/core/ which means that
    // we need to go to ../../../../src/
    const dir = options.dir || ["..", "..", "..", "..", "src"];

    // Create and configure IoC container
    const container = new Container();

    // Create bindings
    const modules = options.containerModules;
    container.load(coreBindings, ...modules);

    // Create bindings for repositories
    await bindRepositories(
        options.database,
        container,
        "entities",
        (dirOrFile: string[]) => path.join(__dirname, ...dir, ...dirOrFile)
    );

    // Create bindings for controllers
    await bindControllers(
        "controllers",
        (dirOrFile: string[]) => path.join(__dirname, ...dir, ...dirOrFile)
    );

    // Create and configure Express server
    const server = new InversifyExpressServer(
        container,
        null,
        null,
        null,
        options.AuthProvider
    );

    server.setConfig(options.expressConfig);

    // Create and run Express app
    const app = server.build();

    return app;

}
