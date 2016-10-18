"use strict";
var just_1 = require("./just");
var nothing_1 = require("./nothing");
var Maybe = (function () {
    function Maybe(val) {
        if (val !== undefined) {
            this.isJust = true;
            this.isNothing = false;
            this.just = new just_1.default(val);
        }
        else {
            this.isJust = false;
            this.isNothing = true;
            this.nothing = new nothing_1.default();
        }
    }
    return Maybe;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Maybe;
