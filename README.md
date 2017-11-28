# :gem: Zafiro :gem:

<img width="400" src="./assets/logo.png" />

### Lightweight web framework for Node.js apps powered by [InversifyJS](https://github.com/inversify/InversifyJS), [TypeORM](https://github.com/typeorm/typeorm) and [Express](https://github.com/expressjs/express) :rocket:

[![Join the chat at https://gitter.im/inversify/InversifyJS](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/inversify/InversifyJS?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Join the chat at https://gitter.im/remojansen/zafiro](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/remojansen/zafiro?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/zafiro.svg)](http://badge.fury.io/js/zafiro)
[![Build Status](https://travis-ci.org/remojansen/zafiro.svg?branch=master)](https://travis-ci.org/remojansen/zafiro)
[![Build status](https://ci.appveyor.com/api/projects/status/5kbh6wgi9rg7v6pr?svg=true)](https://ci.appveyor.com/project/remojansen/zafiro)
[![Dependencies](https://david-dm.org/remojansen/zafiro.svg)](https://david-dm.org/remojansen/zafiro#info=dependencies)
[![img](https://david-dm.org/remojansen/zafiro/dev-status.svg)](https://david-dm.org/remojansen/zafiro/#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/remojansen/zafiro/badge.svg)](https://snyk.io/test/github/remojansen/zafiro)
[![Twitter Follow](https://img.shields.io/twitter/follow/InversifyJS.svg?style=flat&maxAge=86400)](https://twitter.com/inversifyjs)

:construction: WORK IN PROGRESS :construction:

## The basics

```ts
import "reflect-metadata";
import { createApp } from "zafiro";
import { appBindings } from "./config/ioc_config";
import { expressConfig } from "./config/express_config";
import { AuthProvider } from "./infrastructure/auth/auth_provider";

(async () => {

    const app = await createApp({
        database: "postgres",
        containerModules: [appBindings]
        AuthProvider: AuthProvider,
        expressConfig: expressConfig
    });

    app.listen(
        3000,
        () => console.log("Example app listening on port 3000!")
    );

})();
```

### Required environment variables

- `DATABASE_HOST`
- `DATABASE_PORT`
- `DATABASE_USER`
- `DATABASE_PASSWORD`
- `DATABASE_DB`

### Required project folders

- `/src/controllers/` You must add your controllers unders this folder. The controllers are powerd by [inversify-express-utils](https://github.com/inversify/inversify-express-utils).

- `/src/entities/` You must add your entities unders this folder. The entities are powerd by [TypeORM](https://github.com/typeorm/typeorm).

> :warning: Please note that each entity and each controller in your application must be defined on its own file and be exported using a [`default` ES6 export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#Using_the_default_export).

### Defining an Entity

You can define an entity using the [TypeORM API](https://github.com/typeorm/typeorm#create-an-entity):

```ts
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class DirectMessage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    senderId: number;

    @Column()
    recipientId: number;

    @Column()
    content: string;

    @CreateDateColumn()
    createdDate: Date;
}
```

### Declaring a Repository<T>

A `Repository<T>` will be generated automatically at runtime. The [repository API](https://github.com/typeorm/typeorm#loading-from-the-database) is powered by TypeORM.

You can access a `Repository<T>` by injection it into a `Controller`, `BaseMiddleware`, `AuthProvider`, etc. First you need to declare a type identifier for the repository that you wish to inject:

```ts
const TYPE = {
    DirectMessageRepository: Symbol.for("Repository<DirectMessage>")
};
```

Then you can inject it using the `@inject` annotation:

```t
@inject(TYPE.DirectMessageRepository) private readonly _dmRepository: Repository<DirectMessage>;
```

The dependency injection in Zafiro is powered by [InversifyJS](https://github.com/inversify/InversifyJS).

### Declaring a Controller

```ts
import { injectable, inject } from "inversify";
import { controller, httpGet, BaseHttpController } from "inversify-express-utils";
import { TYPE } from "./contants/types";

@controller("/direct_message")
class UserPreferencesController extends BaseHttpController {

    @inject(TYPE.DirectMessageRepository) private readonly _dmRepository: Repository<DirectMessage>;

    @httpGet("/")
    public async get() {
        if (!this.httpContext.user.isAuthenticated()) {
            this.httpContext.res.status(403).send("Forbidden");
        } else {
            return await this._dmRepository.find({
                recipientId: this.httpContext.details.id;
            });
        }
    }

}
```

## TODOs

- [ ] Support access to `inversify-express-utils` options.
- [ ] Support access to `TypeORM` options.
- [ ] Support access to internal `container`.
- [ ] Implement automated tests
- [ ] Document everything
- [ ] Provide default implementations of `AuthProvider`?
- [ ] Support multiple auth providers?
- [ ] Create offical example
