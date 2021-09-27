import React, { useState } from "react";
import styles from "./multiples.module.scss";

import { sumMultipleOf } from "../../utils/multiples";

export function Multiples() {
  const [multipleNumber, setMultipleNumber] = useState(0);

  return (
    <div className={styles.container} data-testid="multiplesScreen">
      <h1>Exercício 1 - Múltiplos de 3 ou 5</h1>
      <p>Digite um número:</p>
      <input
        type="number"
        min="1"
        step="1"
        value={multipleNumber}
        onChange={(e) => setMultipleNumber(Number(e.target.value))}
        data-testid="inputNumber"
      />
      <button
        type="button"
        onClick={() => sumMultipleOf(multipleNumber)}
        data-testid="button"
      >
        Enviar
      </button>
      <p data-testid="resultOf3or5">{`O valor da soma de todos os números múltiplos de 3 ou 5 é = ${
        sumMultipleOf(multipleNumber).sumMultipleOf3or5
      }`}</p>
      <p>{`O valor da soma de todos os números múltiplos de 3 e 5 é = ${
        sumMultipleOf(multipleNumber).sumMultipleOf3And5
      }`}</p>
      <p>{`O valor da soma de todos os números múltiplos de 3 ou 5 e 7 é = ${
        sumMultipleOf(multipleNumber).sumMultipleOf3or5and7
      }`}</p>
    </div>
  );
}
