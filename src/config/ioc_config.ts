import { ContainerModule } from "inversify";
import { ZAFIRO_TYPE } from "../constants/types";
import * as interfaces from "../interfaces";
import DbClient from "../db/db_client";
import RepositoryFactory from "../db/repository_factory";
import Logger from "../logging/logger";

export const coreBindings = new ContainerModule((bind) => {

    bind<interfaces.DbClient>(ZAFIRO_TYPE.DbClient)
        .to(DbClient)
        .inSingletonScope();

    bind<interfaces.RepositoryFactory>(ZAFIRO_TYPE.RepositoryFactory)
        .to(RepositoryFactory)
        .inSingletonScope();

    bind<interfaces.Logger>(ZAFIRO_TYPE.Logger)
        .to(Logger)
        .inRequestScope();

});
