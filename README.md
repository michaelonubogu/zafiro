# :gem: Zafiro :gem:

<img width="400" src="./assets/logo.png" />

## A lightweight web framework for Node.js apps powered by [InversifyJS](https://github.com/inversify/InversifyJS), [TypeORM](https://github.com/typeorm/typeorm) and [Express](https://github.com/expressjs/express) :rocket:

[![Join the chat at https://gitter.im/remojansen/zafiro](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/remojansen/zafiro?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/zafiro.svg)](http://badge.fury.io/js/zafiro)
[![Build Status](https://travis-ci.org/remojansen/zafiro.svg?branch=master)](https://travis-ci.org/remojansen/zafiro)
[![Build status](https://ci.appveyor.com/api/projects/status/5kbh6wgi9rg7v6pr?svg=true)](https://ci.appveyor.com/project/remojansen/zafiro)
[![Dependencies](https://david-dm.org/remojansen/zafiro.svg)](https://david-dm.org/remojansen/zafiro#info=dependencies)
[![img](https://david-dm.org/remojansen/zafiro/dev-status.svg)](https://david-dm.org/remojansen/zafiro/#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/remojansen/zafiro/badge.svg)](https://snyk.io/test/github/remojansen/zafiro)

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

## Required project folders

- `controllers`
- `entities`

## TODOs

- [ ] Support access to `inversify-express-utils` options.
- [ ] Support access to `TypeORM` options.
- [ ] Support access to internal `container`.
- [ ] Implement automated tests
- [ ] Document everything
- [ ] Provide default implementations of `AuthProvider`?
- [ ] Support multiple auth providers?
- [ ] Create offical example
