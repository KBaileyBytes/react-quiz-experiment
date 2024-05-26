import { useContext } from "react";
import AnswerList from "./AnswerList";
import CategoryIcon from "./CategoryIcon";
import DifficultyPill from "./DifficultyPill";
import { GameContext } from "../store/GameContext";

export default function Question() {
  const { currentQuestion } = useContext(GameContext);

  return (
    <>
      <div className="flex justify-between py-4">
        <DifficultyPill difficulty={currentQuestion.difficulty} />
        <CategoryIcon category={currentQuestion.category} />
      </div>
      <p className="text-4xl font-bold pb-4">{currentQuestion.question.text}</p>
      <AnswerList
        incorrectAnswers={currentQuestion.incorrectAnswers}
        correctAnswer={currentQuestion.correctAnswer}
      />
    </>
  );
}
