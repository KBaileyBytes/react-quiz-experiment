import { useEffect, useState } from "react";
import Button from "./Button";

export default function AnswerList({ incorrectAnswers, correctAnswer, children }) {
    const [answers, setAnswers] = useState([]);
    
    useEffect(() => {
        if (answers.length === 0) {
            const answersCopy = [...incorrectAnswers];
            const correctIndex = Math.floor(Math.random() * 4);

            // Puts the answer at the generated index
            answersCopy.splice(correctIndex, 0, correctAnswer);
            setAnswers(answersCopy);
        }
    }, []);

    return (
        <div className="flex justify-center">
            <div className="w-full grid grid-rows-2 grid-flow-col gap-6 text-center my-8">
                {answers.map((answer, index) => (
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
                    onClick={() => console.log(answer === correctAnswer)}>
                        {answer}
                </Button>
                ))}
            </div>
        </div>
    );
}