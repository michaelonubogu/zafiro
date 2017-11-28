# Zafiro

<img width="400" src="/assets/logo.png" />

## A lightweight web framework for Node.js apps powered by InversifyJS, TypeORM and Express

[![npm version](https://badge.fury.io/js/zafiro.svg)](http://badge.fury.io/js/zafiro)
[![Build Status](https://secure.travis-ci.org/remojansen/zafiro.svg?branch=master)](https://travis-ci.org/remojansen/zafiro)
[![Build status](https://ci.appveyor.com/api/projects/status/5kbh6wgi9rg7v6pr?svg=true)](https://ci.appveyor.com/project/remojansen/zafiro)
[![Test Coverage](https://codeclimate.com/github/remojansen/zafiro/badges/coverage.svg)](https://codeclimate.com/github/remojansen/zafiro/coverage)
[![Dependencies](https://david-dm.org/remojansen/zafiro.svg)](https://david-dm.org/remojansen/zafiro#info=dependencies)
[![img](https://david-dm.org/remojansen/zafiro/dev-status.svg)](https://david-dm.org/remojansen/zafiro/#info=devDependencies)
[![img](https://david-dm.org/remojansen/zafiro/peer-status.svg)](https://david-dm.org/remojansen/zafiro/#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/remojansen/zafiro/badge.svg)](https://snyk.io/test/github/remojansen/zafiro)

[![NPM](https://nodei.co/npm/zafiro.png?downloads=true&downloadRank=true)](https://nodei.co/npm/zafiro/)
[![NPM](https://nodei.co/npm-dl/zafiro.png?months=9&height=3)](https://nodei.co/npm/zafiro/)

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
        dir: ["..", "..", "src"],
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
