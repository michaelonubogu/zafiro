"use strict";
var index_1 = require("../src/index");
var chai_1 = require("chai");
describe("Index", function () {
    it("Should expose Just", function () {
        var just = new index_1.Just(5);
        chai_1.expect(just instanceof index_1.Just).to.eql(true);
    });
    it("Should expose Nothing", function () {
        var nothing = new index_1.Nothing();
        chai_1.expect(nothing instanceof index_1.Nothing).to.eql(true);
    });
    it("Should expose Maybe", function () {
        var maybe = new index_1.Maybe();
        chai_1.expect(maybe instanceof index_1.Maybe).to.eql(true);
    });
    it("Should expose Either", function () {
        var either = index_1.Either.Left(new Error());
        chai_1.expect(either instanceof index_1.Either).to.eql(true);
    });
});
