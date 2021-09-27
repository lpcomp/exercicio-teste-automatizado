import React, { useState } from "react";
import styles from "./happyNumbers.module.scss";

import { isHappyNumber } from "../../utils/happyNumbers";

export function HappyNumbers() {
  const [happyNumber, sethappyNumber] = useState(0);
  const [resultHappyNumber, setResultHappyNumber] = useState(false);

  function handleClick(num: number) {
    setResultHappyNumber(isHappyNumber(num));
  }

  return (
    <div className={styles.container} data-testid="happyScreen">
      <h1>Exercício 2 - Números felizes</h1>
      <p>Digite um número:</p>
      <input
        type="number"
        min="1"
        step="1"
        value={happyNumber}
        onChange={(e) => sethappyNumber(Number(e.target.value))}
        data-testid="inputNumber"
      />
      <button
        type="button"
        onClick={() => handleClick(happyNumber)}
        data-testid="button"
      >
        Is it a happy number?
      </button>
      <p data-testid="isHappy">
        {resultHappyNumber ? "É um número Feliz" : "Não é um número Feliz"}
      </p>
    </div>
  );
}
