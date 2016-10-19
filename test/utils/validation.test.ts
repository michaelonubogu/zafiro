import { utils } from "../../src/index";
import { expect } from "chai";

describe("Utils.Core", () => {

    it("Should allow to get the type of a variable", () => {
        let a = null;
        let b = undefined;
        let c = 5;
        expect(utils.validation.typeOf(a)).to.eql("object");
        expect(utils.validation.typeOf(b)).to.eql("undefined");
        expect(utils.validation.typeOf(c)).to.eql("number");
    });

    it("Should allow identify null values", () => {
        let a = null;
        let b = undefined;
        let c = 5;
        expect(utils.validation.isNull(a)).to.eql(true);
        expect(utils.validation.isNull(b)).to.eql(false);
        expect(utils.validation.isNull(c)).to.eql(false);
    });

    it("Should allow identify null values", () => {
        let a = null;
        let b = undefined;
        let c = 5;
        expect(utils.validation.isNull(a)).to.eql(true);
        expect(utils.validation.isNull(b)).to.eql(false);
        expect(utils.validation.isNull(c)).to.eql(false);
    });

    it("Should allow identify undefined values", () => {
        let a = null;
        let b = undefined;
        let c = 5;
        expect(utils.validation.isUndefined(a)).to.eql(false);
        expect(utils.validation.isUndefined(b)).to.eql(true);
        expect(utils.validation.isUndefined(c)).to.eql(false);
    });

    it("Should allow identify undefined or null (Nothing) values", () => {
        let a = null;
        let b = undefined;
        let c = 5;
        expect(utils.validation.isNothing(a)).to.eql(true);
        expect(utils.validation.isNothing(b)).to.eql(true);
        expect(utils.validation.isNothing(c)).to.eql(false);
    });

});
