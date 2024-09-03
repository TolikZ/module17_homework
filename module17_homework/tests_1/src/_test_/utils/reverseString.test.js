import { reverseString } from "../../utils/reverseString.js";

describe("test for reverseString function", () => {
  it("should reverse string", () => expect(reverseString("hello")).toBe("olleh"));
});