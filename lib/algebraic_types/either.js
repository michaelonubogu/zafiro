"use strict";
var maybe_1 = require("./maybe");
var Either = (function () {
    function Either(left, right) {
        this._left = new maybe_1.default();
        this._right = new maybe_1.default();
        if (left !== null) {
            this._left = new maybe_1.default(left);
            this.isLeft = true;
            this.isRight = false;
        }
        if (right !== null) {
            this._right = new maybe_1.default(right);
            this.isLeft = false;
            this.isRight = true;
        }
    }
    Either.Left = function (left) {
        return new Either(left, null);
    };
    Either.Right = function (right) {
        return new Either(null, right);
    };
    Either.prototype.getLeft = function () {
        return this._left.just.value;
    };
    Either.prototype.getRight = function () {
        return this._right.just.value;
    };
    return Either;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Either;
