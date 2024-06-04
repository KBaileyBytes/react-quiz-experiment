import { GameContext } from "../store/GameContext";
import { useContext } from "react";
import Button from "./Button";

export default function AnswerList() {
  const { currentQuestion, handleAnswerClick } = useContext(GameContext);

  return (
    <div className="flex justify-center">
      <div className="w-full grid grid-rows-2 grid-flow-col gap-12 text-center my-8">
        {currentQuestion.shuffledAnswers.map((answer, index) => (
          <Button
            key={index}
            className="font-bold 
                        text-xl 
                        px-4 
                        py-2 
                        rounded-full 
                        hover:bg-slate-800 
                        hover:text-slate-100   
                        sm:max-w-xs 
                        md:max-w-sm 
                        lg:max-w-md"
            onClick={() =>
              handleAnswerClick(index, answer, currentQuestion.correctAnswer)
            }
          >
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
}
