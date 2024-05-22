import AnswerList from "./AnswerList";
import DifficultyPill from "./DifficultyPill";

export default function Question({ currentQuestion, turn, children }) {
    return (
        <div className="container p-12 bg-slate-700 rounded-lg border-2 border-slate-600 drop-shadow-md">
            <progress max={10} value={turn} className="rounded-full w-full my-8" />
            <p className="text-4xl font-bold pb-4">{currentQuestion.question.text}</p>
            <div className="flex py-4 items-center">
                <DifficultyPill difficulty={currentQuestion.difficulty} />
                <p className="text-lg font-bold px-8">{currentQuestion.category}</p>
            </div>
            <AnswerList incorrectAnswers={currentQuestion.incorrectAnswers} correctAnswer={currentQuestion.correctAnswer} />        
        </div>
    );
}