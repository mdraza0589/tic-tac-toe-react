import React, { useState } from 'react'
import styles from './Style.module.css'

function Box() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isTrue, setIsTrue] = useState(true)
  const [winner, setWinner] = useState(null)

  function handleClick(index) {
    if (board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isTrue ? 'X' : 'O';
    setBoard(newBoard);
    setIsTrue(!isTrue);
    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  }

  

  function boxItem(index) {
    return (
      <button onClick={() => handleClick(index)} className={styles.box}>
        {board[index]}
      </button>
    );
  }

  const checkWinner = (newBoard) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return [a, b, c];
      }
    }
    return null;
  };

  function handleButton(){
    setBoard(Array(9).fill(null));
    setWinner(null)
  }

  return (
    <div className={styles.container}>
      {winner && <div className={styles.winnerBox}> Congratulations! 🎉 ,  {winner} is the winner! </div>}
      <div className={styles.boxContainer}>
        {boxItem(0)}
        {boxItem(1)}
        {boxItem(2)}
      </div>
      <div className={styles.boxContainer}>
        {boxItem(3)}
        {boxItem(4)}
        {boxItem(5)}
      </div>
      <div className={styles.boxContainer}>
        {boxItem(6)}
        {boxItem(7)}
        {boxItem(8)}
      </div>
      <button className={styles.setBtn} onClick={handleButton}>ReStart</button>
    </div>
  );
}

export default Box;
