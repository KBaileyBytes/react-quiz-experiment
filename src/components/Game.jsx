import { GameContext } from "../store/GameContext";
import { useContext, useEffect } from "react";

export default function Game({ children, ...props }) {
  const { resetQuestions, questions, gameOver } = useContext(GameContext);

  useEffect(() => {
    resetQuestions();
  }, []);

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading Questions...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen pb-12">
      <section className="w-[50rem] p-16 bg-slate-700 rounded-lg border-2 border-slate-600 drop-shadow-md">
        {!gameOver ? children : "Game Over"}
      </section>
    </div>
  );
}
