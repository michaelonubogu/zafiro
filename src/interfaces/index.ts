import { Connection, Repository, ConnectionOptions } from "typeorm";
import * as express from "express";
import { interfaces } from "inversify";
import { interfaces as expressInterfaces } from "inversify-express-utils";

export type SupportedDatabases = ConnectionOptions["type"];

export interface AppOptions {
    dir?: string[];
    database: SupportedDatabases;
    containerModules: interfaces.ContainerModule[];
    AuthProvider: { new(): expressInterfaces.AuthProvider };
    expressConfig: (app: express.Application) => void;
}

export interface DbClient {
    getConnection(
        database: SupportedDatabases,
        directoryName: string,
        getPath: (dirOrFile: string[]) => string
    ): Promise<Connection>;
}

export interface RepositoryFactory {
    getRepositories<T>(
        database: SupportedDatabases,
        entities: Array<{ new (): T }>,
        directoryName: string,
        getPath: (dirOrFile: string[]) => string
    ): Promise<Repository<T>[]>;
}
