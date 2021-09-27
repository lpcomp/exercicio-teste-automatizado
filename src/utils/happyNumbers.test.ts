import { squareNumber, sumNumbers, isHappyNumber } from "./happyNumbers";

describe("Happy Numbers", () => {
  it("should test a number up to 2", () => {
    expect(squareNumber(2)).toBe(4);
  });

  it("should test the sum of squares", () => {
    expect(sumNumbers(10)).toBe(1);
  });

  it("should test if it is a happy number", () => {
    expect(isHappyNumber(10)).toBe(true);
    expect(isHappyNumber(8)).toBe(false);
  });
});
