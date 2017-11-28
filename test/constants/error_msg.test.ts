import { expect } from "chai";
import { ERROR_MSG } from "../../src/constants/error_msg";

describe("Error Messages", () => {

  it("Should be able to create an error message", () => {
      const path = "controller";
      let errorMsg1 = ERROR_MSG.cannot_read_path(path);
      expect(errorMsg1).eql(`Cannot read path! ${path}`);
      let errorMsg2 = ERROR_MSG.entity_modules_must_have_a_default_export(path);
      expect(errorMsg2).eql(`Entity modules must have a default entity_modules_must_have_a_default_export! ${path}`);
  });

});
