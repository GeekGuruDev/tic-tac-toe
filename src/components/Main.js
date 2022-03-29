import { useCallback, useEffect, useState } from "react";
import Board from "./Board";
import Score from "./Score";

const Main = () => {
  const initialValues = Array(9).fill(null);
  const [win, setWin] = useState(0);
  const [tie, setTie] = useState(0);
  const [loss, setLoss] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [end, setEnd] = useState(false);
  // const [showWinner, setShowWinner] = useState(false);
  const [winner, setWinner] = useState(null);
  const [values, setValues] = useState(initialValues);

  const markValue = useCallback(
    (index) => {
      if (values[index] || end) return;
      const newValues = [...values];
      newValues[index] = playerTurn ? "O" : "X";
      setValues(newValues);
      setPlayerTurn((preVal) => !preVal);
    },
    [end, playerTurn, values]
  );

  const calcWinner = useCallback(() => {
    if (
      (values[0] && values[0] === values[4] && values[4] === values[8]) ||
      (values[2] && values[2] === values[4] && values[4] === values[6]) ||
      (values[3] && values[3] === values[4] && values[4] === values[5]) ||
      (values[1] && values[1] === values[4] && values[4] === values[7])
    )
      return values[4];

    if (
      (values[0] && values[0] === values[1] && values[1] === values[2]) ||
      (values[0] && values[0] === values[3] && values[3] === values[6])
    )
      return values[0];

    if (
      (values[2] && values[2] === values[5] && values[5] === values[8]) ||
      (values[6] && values[6] === values[7] && values[7] === values[8])
    )
      return values[8];

    if (
      values[0] &&
      values[1] &&
      values[2] &&
      values[3] &&
      values[4] &&
      values[5] &&
      values[6] &&
      values[7] &&
      values[8]
    )
      return "Tie";

    return "";
  }, [values]);

  const restart = () => {
    setEnd(false);
    setValues(initialValues);
    setPlayerTurn(true);
  };

  useEffect(() => {
    const newWinner = calcWinner();
    setWinner(newWinner);
    newWinner && setEnd(true);
    newWinner === "O" && setWin((preVal) => preVal + 1);
    newWinner === "X" && setLoss((preVal) => preVal + 1);
    newWinner === "Tie" && setTie((preVal) => preVal + 1);
  }, [calcWinner]);

  // useEffect(() => {
  //   console.log("rew");
  //   if (!playerTurn) {
  //     let index = Math.floor(Math.random() * 9);
  //     while (values[index]) index = Math.floor(Math.random() * 9);
  //     console.log(index);
  //     markValue(index);
  //   }
  // }, [playerTurn, values, markValue]);

  return (
    <main className=" flex-grow flex flex-col justify-center gap-y-6">
      <div className="flex justify-center gap-6">
        <Score type="O">{win}</Score>
        <Score type="Tie">{tie}</Score>
        <Score type="X">{loss}</Score>
      </div>
      <h1 className={`text-center text-4xl h-10`}>
        {winner} {(winner === "X" || winner === "O") && "Wins"}
      </h1>
      <Board values={values} setValues={markValue} />
      <button
        className={`bg-indigo-500 w-max mx-auto px-4 py-2 rounded text-slate-200 ${
          !end && "invisible"
        }`}
        onClick={restart}
      >
        Play Again
      </button>
    </main>
  );
};

export default Main;
