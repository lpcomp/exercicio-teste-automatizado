const squareNumber = (num: number) => {
  const result = Math.pow(num, 2);
  return result;
};

const sumNumbers = (num: number) => {
  const splitedNumbers = num.toString().split("");

  const resultNumbers = splitedNumbers.reduce(
    (acc, cur) => {
      acc.number += squareNumber(Number(cur));
      return acc;
    },
    {
      number: 0,
    }
  );

  return resultNumbers.number;
};

const isHappyNumber = (num: number) => {
  let pastNumbers: number[] = [];
  let resultNumber = sumNumbers(num);
  let endVerification = false;
  let result = false;

  while (endVerification === false) {
    if (resultNumber === 1) {
      result = true;
      endVerification = true;
    } else if (pastNumbers.indexOf(resultNumber) > -1) {
      result = false;
      endVerification = true;
    } else {
      pastNumbers.push(resultNumber);
      resultNumber = sumNumbers(resultNumber);
    }
  }

  return result;
};

export { squareNumber, sumNumbers, isHappyNumber };
