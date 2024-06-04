import { useContext } from "react";
import AnswerList from "./AnswerList";
import CategoryIcon from "./CategoryIcon";
import DifficultyPill from "./DifficultyPill";
import { GameContext } from "../store/GameContext";
import Timer from "./Timer";

export default function Question() {
  const { currentQuestion } = useContext(GameContext);

  return (
    <>
      <div className="flex py-4 justify-between">
        <DifficultyPill difficulty={currentQuestion.difficulty} />
        <CategoryIcon category={currentQuestion.category} />
      </div>
      <Timer />
      <p className="text-4xl font-bold pb-4">{currentQuestion.question.text}</p>
      <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <AnswerList />
    </>
  );
}
