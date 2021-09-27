import {
  isMultipleOf3,
  isMultipleOf5,
  isMultipleOf7,
  isMultipleOf3and5,
  sumMultipleOf,
} from "./multiples";

describe("Multiples", () => {
  it("should test if a number multiple of 3", () => {
    expect(isMultipleOf3(9)).toBe(true);
    expect(isMultipleOf3(10)).toBe(false);
  });

  it("should test if a number multiple of 5", () => {
    expect(isMultipleOf5(5)).toBe(true);
    expect(isMultipleOf5(11)).toBe(false);
  });

  it("should test if a number multiple of 7", () => {
    expect(isMultipleOf7(7)).toBe(true);
    expect(isMultipleOf7(11)).toBe(false);
  });

  it("should test if a number multiple of 3 and 5", () => {
    expect(isMultipleOf3and5(15)).toBe(true);
    expect(isMultipleOf3and5(16)).toBe(false);
  });

  it("should test if a sum of number multiple of 3 or 5", () => {
    expect(sumMultipleOf(10).sumMultipleOf3or5).toBe(33);
  });

  it("should test if a sum of number multiple of 3 e 5", () => {
    expect(sumMultipleOf(17).sumMultipleOf3And5).toBe(15);
  });

  it("should test if a sum of number multiple of 3 or 5 and 7", () => {
    expect(sumMultipleOf(25).sumMultipleOf3or5and7).toBe(21);
  });
});
