import React, { useState } from "react";
import styles from "./wordsInNumbers.module.scss";

import {
  sumLetterInWord,
  verifyWordIsPrimeHappyMultiple,
} from "../../utils/wordsInNumbers";

type primeHappyMultiple = {
  isPrime: boolean;
  isHappy: boolean;
  isMultipleOf3or5: boolean[];
};

export function WordsInNumbers() {
  const [word, setWord] = useState("");
  const [totalSum, setTotalSum] = useState(0);
  const [isPrimeHappyMultiple, setIsPrimeHappyMultiple] =
    useState<primeHappyMultiple>();

  function handleClick(word: string) {
    setTotalSum(sumLetterInWord(word));
    const result = verifyWordIsPrimeHappyMultiple(sumLetterInWord(word));
    setIsPrimeHappyMultiple(result);
  }

  return (
    <div className={styles.container} data-testid="wordsInNumbersScreen">
      <h1>Exercício 3 - Palavras em números</h1>
      <p>Digite uma palavra:</p>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        data-testid="inputText"
      />
      <button
        type="button"
        onClick={() => handleClick(word)}
        data-testid="button"
      >
        Descubra
      </button>
      <p data-testid="totalsum">{`O valor total da palavra é: ${totalSum}`}</p>
      {isPrimeHappyMultiple && (
        <>
          <p data-testid="primeWord">
            {`O valor total da palavra é prima? ${
              isPrimeHappyMultiple.isPrime ? "sim" : "não"
            }`}
          </p>
          <p data-testid="happyWord">
            {`O valor total da palavra é feliz?: ${
              isPrimeHappyMultiple.isHappy ? "sim" : "não"
            }`}
          </p>
          <p data-testid="multipleOf3">
            {`O valor total da palavra é multiplo de 3?: ${
              isPrimeHappyMultiple.isMultipleOf3or5[0] ? "sim" : "não"
            }`}
          </p>
          <p data-testid="multipleOf5">
            {`O valor total da palavra é multiplo de 5?: ${
              isPrimeHappyMultiple.isMultipleOf3or5[1] ? "sim" : "não"
            }`}
          </p>
        </>
      )}
    </div>
  );
}
