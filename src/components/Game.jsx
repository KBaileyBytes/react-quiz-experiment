import { GameContext } from "../store/GameContext";
import { useContext, useEffect } from "react";
import TotalProgressBar from "./TotalProgressBar";
import Timer from "./Timer";
import Question from "./Question";

export default function Game({ ...props }) {
  const {
    resetQuestions,
    startGame,
    setGameOver,
    questions,
    gameOver,
    totalCorrect,
  } = useContext(GameContext);

  useEffect(() => {
    resetQuestions();
    setGameOver(false);
    startGame();
  }, []);

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading Questions...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full pb-12">
      <section className="w-[50rem] p-16 bg-slate-700 rounded-lg border-2 border-slate-600 drop-shadow-md">
        <TotalProgressBar />
        {!gameOver ? <Question /> : <div>Game Over: {totalCorrect} / 10</div>}
      </section>
    </div>
  );
}
