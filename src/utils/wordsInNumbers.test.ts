import {
  isPrimeNumber,
  letterToNumber,
  sumLetterInWord,
} from "./wordsInNumbers";

describe("words in numbers", () => {
  it("should test a number is prime", () => {
    expect(isPrimeNumber(7)).toBe(true);
    expect(isPrimeNumber(10)).toBe(false);
  });

  it("should test assign a letter to the number", () => {
    expect(letterToNumber("a")).toBe(1);
    expect(letterToNumber("z")).toBe(26);
    expect(letterToNumber("A")).toBe(27);
    expect(letterToNumber("Z")).toBe(52);
  });

  it("should test the sum of numbers associated with letters", () => {
    expect(sumLetterInWord("aaa")).toBe(3);
    expect(sumLetterInWord("az")).toBe(27);
    expect(sumLetterInWord("Z")).toBe(52);
  });
});
