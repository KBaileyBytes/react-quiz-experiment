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

  if (gameOver) {
    return <div>GAME OVER</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen pb-12">
      {children}
    </div>
  );
}
