const isMultipleOf3 = (num: number) => {
  return num % 3 === 0;
};

const isMultipleOf5 = (num: number) => {
  return num % 5 === 0;
};

const isMultipleOf7 = (num: number) => {
  return num % 7 === 0;
};

const isMultipleOf3or5 = (num: number) => {
  return isMultipleOf3(num) || isMultipleOf5(num);
};

const isMultipleOf3and5 = (num: number) => {
  return isMultipleOf3(num) && isMultipleOf5(num);
};

const isMultipleOf3or5and7 = (num: number) => {
  return (isMultipleOf3(num) || isMultipleOf5(num)) && isMultipleOf7(num);
};

type returnMultipleOf = {
  sumMultipleOf3or5: number;
  sumMultipleOf3And5: number;
  sumMultipleOf3or5and7: number;
};

const sumMultipleOf = (multipleNumber: number): returnMultipleOf => {
  const lengthNumber = new Array(multipleNumber).fill(0);

  const resultNumbers = lengthNumber.reduce(
    (acc, cur, idx) => {
      let index = idx + 1;
      acc.sumMultipleOf3or5 += isMultipleOf3or5(index) && index;
      acc.sumMultipleOf3And5 += isMultipleOf3and5(index) && index;
      acc.sumMultipleOf3or5and7 += isMultipleOf3or5and7(index) && index;
      return acc;
    },
    {
      sumMultipleOf3or5: 0,
      sumMultipleOf3And5: 0,
      sumMultipleOf3or5and7: 0,
    }
  );

  return resultNumbers;
};

export {
  isMultipleOf3,
  isMultipleOf5,
  isMultipleOf7,
  isMultipleOf3and5,
  sumMultipleOf,
  isMultipleOf3or5,
  isMultipleOf3or5and7,
};
