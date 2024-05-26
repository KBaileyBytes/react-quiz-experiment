import { GameContext } from "../store/GameContext";
import { useContext, useEffect } from "react";
import QuestionContainer from "./QuestionContainer";

export default function Game({ children, ...props }) {
  const { resetQuestions, questions } = useContext(GameContext);

  useEffect(() => {
    resetQuestions();
  }, []);

  if (questions.length < 1) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading Questions...
      </div>
    );
  }

  return <div {...props}>{children}</div>;
}
