import { isHappyNumber } from "./happyNumbers";
import { isMultipleOf3, isMultipleOf5 } from "./multiples";

const isPrimeNumber = (num: number) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const letterToNumber = (letter: string) => {
  const asciinumber = letter.charCodeAt(0);
  return asciinumber > 96 ? asciinumber - 96 : asciinumber - 38;
};

const sumLetterInWord = (word: string) => {
  const letters = word.replace(/[^a-zA-Z]/g, "").split("");
  console.log(letters);

  const sumOf = letters.reduce(
    (acc, cur) => {
      acc.letters += letterToNumber(cur);
      return acc;
    },
    {
      letters: 0,
    }
  );

  return sumOf.letters;
};

const verifyWordIsPrimeHappyMultiple = (num: number) => {
  return {
    isPrime: isPrimeNumber(num),
    isHappy: isHappyNumber(num),
    isMultipleOf3or5: [isMultipleOf3(num), isMultipleOf5(num)],
  };
};

export {
  isPrimeNumber,
  letterToNumber,
  sumLetterInWord,
  verifyWordIsPrimeHappyMultiple,
};
