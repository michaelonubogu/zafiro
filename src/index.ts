import interfaces from "./interfaces/interfaces";

import Maybe from "./algebraic_types/maybe";
import Either from "./algebraic_types/either";

import Record from "./immutable_types/record";
import List from "./immutable_types/list";

import * as core from "./utils/core";
import * as validation from "./utils/validation";
import * as object from "./utils/object";
import * as array from "./utils/validation";
import * as math from "./utils/validation";

let algebraicTypes = {
    Either,
    Maybe
};

let immutableTypes = {
    Record,
    List
};

let utils = {
    array,
    core,
    math,
    object,
    validation
};

export { interfaces, algebraicTypes, immutableTypes, utils };
