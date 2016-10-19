import { Maybe } from "../../src/index";
import { expect } from "chai";

describe("Maybe", () => {

    it("Should be able to identify Just", () => {
        let maybeNumber = new Maybe<number>(5);
        expect(Maybe.isJust(maybeNumber)).to.eql(true);
        expect(Maybe.isNothing(maybeNumber)).to.eql(false);
    });

    it("Should be able to identify Nothing", () => {
        let maybeNumber = new Maybe<number>();
        expect(Maybe.isJust(maybeNumber)).to.eql(false);
        expect(Maybe.isNothing(maybeNumber)).to.eql(true);
    });

    it("Should allow use its value", () => {

        interface User {
            city: string;
            name: string;
        }

        let users = [
            { city: "Dublin", name: "John" },
            { city: "Belfast", name: "Dolores" }
        ];

        function fetchUsers(shouldFail: boolean) {
            if (shouldFail) {
                return Maybe.Nothing<User[]>();
            } else {
                return Maybe.Just<User[]>(users);
            }
        }

        let maybeUsersJust = fetchUsers(false);
        expect(Maybe.isJust(maybeUsersJust)).to.eql(true);
        expect(maybeUsersJust.getOrElse([])).to.eqls(users);

        let maybeUsersNothing = fetchUsers(true);
        expect(Maybe.isNothing(maybeUsersNothing)).to.eql(true);
        expect(maybeUsersNothing.getOrElse([]).length).to.eql(0);

    });

    it("Should allow to map to another maybe", () => {

        interface User {
            city: string;
            name: string;
        }

        let data = [
            { city: "Dublin", name: "John" },
            { city: "Belfast", name: "Dolores" }
        ];

        let cities = data.map((user) => user.city);

        let maybeUsersJust = Maybe.Just<User[]>(data);
        let maybeCitiesJust = maybeUsersJust.map<string[]>((users) => {
            return users.map((user) => user.city);
        });
        expect(Maybe.isJust(maybeCitiesJust)).to.eql(true);
        expect(maybeCitiesJust.value).to.eqls(cities);

        let maybeUsersNothing = Maybe.Nothing<User[]>();
        let maybeCitiesNothing = maybeUsersNothing.map<string[]>((users) => {
            return users.map((user) => user.city);
        });
        expect(Maybe.isJust(maybeCitiesJust)).to.eql(true);
        expect(maybeCitiesNothing.value).to.eqls(null);

    });

});
