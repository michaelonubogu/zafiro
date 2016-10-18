import Maybe from "./maybe";
var Either = (function () {
    function Either(left, right) {
        this._left = new Maybe();
        this._right = new Maybe();
        if (left !== null) {
            this._left = new Maybe(left);
            this.isLeft = true;
            this.isRight = false;
        }
        if (right !== null) {
            this._right = new Maybe(right);
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
export default Either;
