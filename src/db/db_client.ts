import { createConnection, Connection } from "typeorm";
import { injectable, inject } from "inversify";
import chalk from "chalk";
import * as interfaces from "../interfaces";
import readdir from "../fs/readdir";

@injectable()
export default class DbClient implements interfaces.DbClient {

    private _cache: Connection | null = null;

    public async getConnection(
        database: interfaces.SupportedDatabases,
        directoryName: string,
        getPath: (dirOrFile: string[]) => string
    ) {
        if (this._cache !== null) {
            return this._cache;
        } else {
            this._cache = await this._createConnection(database, directoryName, getPath);
            return this._cache;
        }
    }

    private async _createConnection(
        database: interfaces.SupportedDatabases,
        directoryName: string,
        getPath: (dirOrFile: string[]) => string
    ) {
        try {
            const dbHost = process.env.DATABASE_HOST;
            const dbPort = parseInt(process.env.DATABASE_PORT as any);
            const dbUser = process.env.DATABASE_USER;
            const dbPassword = process.env.DATABASE_PASSWORD;
            const dbName = process.env.DATABASE_DB;
            const paths = await this._getEntityPaths(directoryName, getPath);
            console.log(
                chalk.cyan(
                    "Trying to connect to DB: \n" +
                    `- host ${dbHost}\n` +
                    `- port ${dbPort}\n` +
                    `- user ${dbUser}\n` +
                    `- password ${dbPassword}\n` +
                    `- database ${dbName}\n`
                )
            );
            const connection = await createConnection({
                type: database as any,
                host: dbHost,
                port: dbPort,
                username: dbUser,
                password: dbPassword,
                database: dbName,
                entities: paths,
                synchronize: true,
            });
            console.log(chalk.green("Success!"));
            return connection;

        } catch (err) {
            console.log(chalk.red("Cannot connect to DB"));
            throw err;
        }
    }

    private async _getEntityPaths(
        directoryName: string,
        getPath: (dirOrFile: string[]) => string
    ) {
        const files = await readdir(directoryName, getPath);
        return files.map(fileName => getPath([directoryName, fileName]));
    }

}
