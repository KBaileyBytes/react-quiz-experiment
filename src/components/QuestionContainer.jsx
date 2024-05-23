import { useState } from "react";
import Question from "./Question";
import TotalProgressBar from "./TotalProgressBar";

export default function QuestionContainer({ questions }) {
    const [turnState, setTurnState] = useState({
        turn: 1,
        correct: 0,
    });

    function handleChangeTurn(turnIndex) {
        // Change the turns
    }

    return (
        <div className="p-12 bg-slate-700 rounded-lg border-2 border-slate-600 drop-shadow-md">
            <TotalProgressBar turn={turnState.turn} questionCount={questions.length} />             
            <Question currentQuestion={questions[turnState.turn]} turn={turnState.turn} />
        </div>
    );
}