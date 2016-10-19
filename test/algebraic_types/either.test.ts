import Either from "../../src/algebraic_types/either";
import { expect } from "chai";

describe("Either", () => {

    it("Should provide left factory", () => {
        let either = Either.Left<Error, number>(new Error());
        expect(Either.isLeft(either)).to.eql(true);
        expect(Either.isRight(either)).to.eql(false);
    });

    it("Should provide right factory", () => {
        let either = Either.Right<Error, number>(5);
        expect(Either.isLeft(either)).to.eql(false);
        expect(Either.isRight(either)).to.eql(true);
    });

    it("Should allow to create instances", () => {

        let eitherLeft = new Either<Error, number>(new Error("Test!"), null);
        expect(Either.isLeft(eitherLeft)).to.eql(true);
        expect(Either.isRight(eitherLeft)).to.eql(false);

        let eitherRight = new Either<Error, number>(null, 5);
        expect(Either.isLeft(eitherRight)).to.eql(false);
        expect(Either.isRight(eitherRight)).to.eql(true);

    });

    it("Should allow use either value", () => {

        interface User {
            city: string;
            name: string;
        }

        let users = [
            { city: "Dublin", name: "John" },
            { city: "Belfast", name: "Dolores" }
        ];

        let e = new Error("Timeout!");

        function fetchUsers(shouldFail: boolean) {
            if (shouldFail) {
                return Either.Left<Error, User[]>(e);
            } else {
                return Either.Right<Error, User[]>(users);
            }
        }

        let eitherRight = fetchUsers(false);
        expect(Either.isRight(eitherRight)).to.eql(true);
        expect(eitherRight.getRightOrElse([])).to.eqls(users);

        let eitherLeft = fetchUsers(true);
        expect(Either.isLeft(eitherLeft)).to.eql(true);
        expect(eitherLeft.getLeftOrElse(new Error())).to.eqls(e);

    });

});
