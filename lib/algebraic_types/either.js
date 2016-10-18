"use strict";
var maybe_1 = require("./maybe");
var Either = (function () {
    function Either(left, right) {
        this._left = (left !== undefined && left !== null) ? new maybe_1.default(left) : new maybe_1.default();
        this._right = (right !== undefined && right !== null) ? new maybe_1.default(right) : new maybe_1.default();
    }
    Either.Left = function (left) {
        return new Either(left, null);
    };
    Either.Right = function (right) {
        return new Either(null, right);
    };
    Either.prototype.isLeft = function () {
        return this._left.isJust;
    };
    Either.prototype.isRight = function () {
        return this._right.isJust;
    };
    return Either;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Either;
