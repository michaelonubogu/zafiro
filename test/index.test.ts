import { interfaces, algebraicTypes } from "../src/index";
import { expect } from "chai";

let Either = algebraicTypes.Either;
let Maybe = algebraicTypes.Maybe;

describe("Index", () => {

    it("Should expose Maybe", () => {
        let maybe: interfaces.Maybe<number> = new Maybe<number>();
        expect(maybe instanceof Maybe).to.eql(true);
    });

    it("Should expose Either", () => {
        let either: interfaces.Either<Error, number> = Either.Left<Error, number>(new Error());
        expect(either instanceof Either).to.eql(true);
    });

});
