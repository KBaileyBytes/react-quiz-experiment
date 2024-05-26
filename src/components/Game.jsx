import { GameContext } from "../store/GameContext";
import { useContext, useEffect } from "react";
import QuestionContainer from "./QuestionContainer";

export default function Game({ children, ...props }) {
  const { getQuestions, questions } = useContext(GameContext);

  useEffect(() => {
    getQuestions();
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
