import Maybe from "./maybe";
var Either = (function () {
    function Either(left, right) {
        this._left = (left !== undefined && left !== null) ? new Maybe(left) : new Maybe();
        this._right = (right !== undefined && right !== null) ? new Maybe(right) : new Maybe();
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
export default Either;
