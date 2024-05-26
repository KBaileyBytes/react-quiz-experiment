import { GameContext } from "../store/GameContext";
import { useContext } from "react";
import Button from "./Button";

export default function AnswerList() {
  const gameContext = useContext(GameContext);

  return (
    <div className="flex justify-center">
      <div className="w-full grid grid-rows-2 grid-flow-col gap-6 text-center my-8">
        {gameContext.currentQuestion.shuffledAnswers.map((answer, index) => (
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
            onClick={() => {
              console.log(answer === gameContext.currentQuestion.correctAnswer);
              gameContext.setTurn((oldTurn) => oldTurn + 1);
            }}
          >
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
}
