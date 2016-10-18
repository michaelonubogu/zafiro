import Just from "./just";
import Nothing from "./nothing";
var Maybe = (function () {
    function Maybe(val) {
        if (val !== undefined) {
            this.isJust = true;
            this.isNothing = false;
            this.nothing = null;
            this.just = new Just(val);
        }
        else {
            this.isJust = false;
            this.isNothing = true;
            this.nothing = new Nothing();
            this.just = null;
        }
    }
    return Maybe;
}());
export default Maybe;
