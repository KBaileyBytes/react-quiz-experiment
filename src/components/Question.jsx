import AnswerList from "./AnswerList";
import CategoryIcon from "./CategoryIcon";
import DifficultyPill from "./DifficultyPill";

export default function Question({ currentQuestion, }) {
    return (
        <>
            <div className="flex justify-between py-4">
                <DifficultyPill difficulty={currentQuestion.difficulty} />
                <CategoryIcon category={currentQuestion.category} />
            </div>
            <p className="text-4xl font-bold pb-4">{currentQuestion.question.text}</p>
            <AnswerList incorrectAnswers={currentQuestion.incorrectAnswers} correctAnswer={currentQuestion.correctAnswer} />   
        </>
    );
}