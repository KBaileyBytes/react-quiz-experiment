import { GameContext } from "../store/GameContext";
import { useContext } from "react";

export default function TotalProgressBar() {
  const { turn, questions } = useContext(GameContext);

  return (
    <div className="relative w-full my-8">
      <progress
        max={questions.length}
        value={turn}
        className="w-full rounded-full h-6"
      />
      <span className="absolute inset-0 flex items-center justify-center text-black font-bold pb-1">
        {turn} / {questions.length}
      </span>
    </div>
  );
}
