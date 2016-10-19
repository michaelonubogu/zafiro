<img width="400" src="assets/logo.png" />

### Stringly typed algebraic data types, immutable data structures and other functional programming utilitites powered by TypeScript

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

:warning: :construction: WORK IN PROGRESS :construction: :warning:

I'm working on this project as a learning exercise.
Please don't expect it to become a real thing...

## Installation
You can install Zafiro using npm:

```
$ npm install --save zafiro
```

The type definitions are included in the npm module.

**:warning: Zafiro requires TypeScript 2.0 with `--strictNullChecks` :warning:**

## Strongly typed algebraic data types

### Maybe<T>
The Maybe type represents the possibility of some value or
nothing. It is often used where null traditionally would to
represent the absence of a value. The advantage of using a
Maybe type over null is that it is both composable and
requires the developer to explicitly acknowledge the
potential absence of a value, helping to avoid the
existence of null pointer exceptions.

```ts
interface User {
    city: string;
    name: string;
}

let users = [
    { city: "Dublin", name: "John" },
    { city: "Belfast", name: "Dolores" }
];

function fetchUsers(shouldFail: boolean) {
    if (shouldFail) {
        return Maybe.Nothing<User[]>();
    } else {
        return Maybe.Just<User[]>(users);
    }
}

let maybeUsersJust = fetchUsers(false);
expect(Maybe.isJust(maybeUsersJust)).to.eql(true);
expect(maybeUsersJust.getOrElse([])).to.eqls(users);

let maybeUsersNothing = fetchUsers(true);
expect(Maybe.isNothing(maybeUsersNothing)).to.eql(true);
expect(maybeUsersNothing.getOrElse([]).length).to.eql(0);
```

The TypeScript type system will ensure that we don't forget
a null check if we try to access the value directly:

```ts
maybeUserArray.value.map((u) => u.city); // Object is possibly 'null' or 'undefined'.
```

### Either<TLeft, TRight>
Either is a representation of two possible types of values, 
sometimes referred to as the disjoint union, or coproduct of 
two types.

The Either type is very similar to the Maybe type, in that
it is often used to represent the notion of failure in some
way.

```ts
import { interfaces, filter, Either } from "zafiro";

interface User {
    city: string;
    name: string;
}

let users = [
    { city: "Dublin", name: "John" },
    { city: "Belfast", name: "Dolores" }
];

let e = new Error("Timeout!");

function fetchUsers(shouldFail: boolean) {
    if (shouldFail) {
        return Either.Left<Error, User[]>(e);
    } else {
        return Either.Right<Error, User[]>(users);
    }
}

let eitherRight = fetchUsers(false);
expect(Either.isRight(eitherRight)).to.eql(true);
expect(eitherRight.getRightOrElse([])).to.eqls(users);

let eitherLeft = fetchUsers(true);
expect(Either.isLeft(eitherLeft)).to.eql(true);
expect(eitherLeft.getLeftOrElse(new Error())).to.eqls(e);
```

The TypeScript type system will ensure that we don't forget
a null check if we try to access the left or right values directly:

```ts
eitherErrorOrUserArray.right.value.map((u) => u.city); // Object is possibly 'null' or 'undefined'.
```

## Acknowledgements
This project would not be possible without the amazing work
acomplished by the following OSS projects:

- https://github.com/fantasyland/fantasy-land
- https://github.com/ramda/ramda
- https://github.com/ramda/ramda-fantasy
