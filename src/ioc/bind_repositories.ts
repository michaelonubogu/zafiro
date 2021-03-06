import chalk from "chalk";
import { Repository } from "typeorm";
import { interfaces as inversifyInterfaces } from "inversify";
import * as interfaces from "../interfaces";
import { ZAFIRO_TYPE } from "../constants/types";
import readdirContents from "../fs/readdir_contents";

export default async function bindRepositories(
    database: interfaces.SupportedDatabases,
    container: inversifyInterfaces.Container,
    directoryName: string,
    getPath: (dirOrFile: string[]) => string
) {

    const factory = container.get<interfaces.RepositoryFactory>(ZAFIRO_TYPE.RepositoryFactory);
    const entities = await readdirContents(directoryName, getPath);
    const entityTypes = entities.map(e => Symbol.for(`Repository<${e.name}>`));

    const repositories = await factory.getRepositories<any>(
        database,
        entities,
        directoryName,
        getPath
    );

    repositories.forEach((repository, i) => {
        const repositoryType = entityTypes[i];
        console.log(chalk.cyan(`Creating repository binding with TYPE ${repositoryType.toString()}`));
        container.bind<Repository<any>>(repositoryType).toConstantValue(repository);
        console.log(chalk.green("Success!"));
    });

    return repositories;
}
