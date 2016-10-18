import Either from "../../src/algebraic_types/either";
import { expect } from "chai";

describe("Either", () => {

    it("Should provide left factory", () => {
        let either = Either.Left<Error, number>(new Error());
        expect(either.isLeft).to.eql(true);
        expect(either.isRight).to.eql(false);
    });

    it("Should provide right factory", () => {
        let either = Either.Right<Error, number>(5);
        expect(either.isLeft).to.eql(false);
        expect(either.isRight).to.eql(true);
    });

    it("Should allow to create instances", () => {

        let eitherLeft = new Either<Error, number>(new Error("Test!"), null);
        expect(eitherLeft.isLeft).to.eql(true);
        expect(eitherLeft.isRight).to.eql(false);

        let eitherRight = new Either<Error, number>(null, 5);
        expect(eitherRight.isLeft).to.eql(false);
        expect(eitherRight.isRight).to.eql(true);

    });

    it("Should allow use either value", () => {

        interface User {
            name: string;
        }

        let users = [
            { name: "John" },
            { name: "Cortana" }
        ];

        function fetchUsersSuccess() {
            return Either.Right<Error, User[]>(users);
        }

        expect(fetchUsersSuccess().isRight).to.eql(true);
        expect(fetchUsersSuccess().getRight()).to.eqls(users);

        let e = new Error("Timeout!");

        function fetchUsersError() {
            return Either.Left<Error, User[]>(e);
        }

        expect(fetchUsersError().isRight).to.eql(false);
        expect(fetchUsersError().getLeft().message ).to.eql(e.message);

    });

});
