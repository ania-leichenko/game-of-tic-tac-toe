import React, { useState } from "react";
import "./Game.css";
import Board from "./Board";
import { calculateWinner } from "../helper";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    // Определяем был ли клик по ячейке или тгра законченна
    if (winner || boardCopy[index]) return;
    // Определяем чей ход(0, Х)
    boardCopy[index] = xIsNext ? "X" : "O";
    // Обновновляем board
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className="start_new_game"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Очистить поле для игры
      </button>
    );
  };
  // [null, 'X', 'O', null, null, null, null, null, null, null,] -> [null, null, null, null, null, null, null, null,]
  const count = board.filter((val) => val === null).length;

  const statusLine = () => {
    if (winner) {
      return "Победитель " + winner;
    }
    if (count === 0) {
      return "Ничья!";
    }
    return "Сейчас ходит " + (xIsNext ? "X" : "O");
  };

  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className="winner__info">{statusLine()}</p>
    </div>
  );
}
