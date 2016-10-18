import { interfaces, Maybe, Just, Nothing, Either } from "../src/index";
import { expect } from "chai";

describe("Index", () => {

    it("Should expose Just", () => {
        let just: interfaces.Just<number> = new Just<number>(5);
        expect(just instanceof Just).to.eql(true);
    });

    it("Should expose Nothing", () => {
        let nothing: interfaces.Nothing = new Nothing();
        expect(nothing instanceof Nothing).to.eql(true);
    });

    it("Should expose Maybe", () => {
        let maybe: interfaces.Maybe<number> = new Maybe<number>();
        expect(maybe instanceof Maybe).to.eql(true);
    });

    it("Should expose Either", () => {
        let either: interfaces.Either<Error, number> = Either.Left<Error, number>(new Error());
        expect(either instanceof Either).to.eql(true);
    });

});
