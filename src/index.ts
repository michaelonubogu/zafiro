export { default as interfaces } from "./interfaces/interfaces";

export { default as Maybe } from "./algebraic_types/maybe";
export { default as Either } from "./algebraic_types/either";

import * as core from "./utils/core";
import * as validation from "./utils/validation";

let utils = {
    core,
    validation
};

export { utils };
