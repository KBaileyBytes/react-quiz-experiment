import { useState } from "react";
import Question from "./Question";

export default function QuestionList({ questions }) {
    const [turnState, setTurnState] = useState({
        turn: 4,
        correct: 0,
    });

    function handleChangeTurn(turnIndex) {
        // Change the turns
    }

    return (
        <div className="flex items-center justify-center min-h-screen max-w-xlg">
            <Question currentQuestion={questions[turnState.turn]} turn={turnState.turn} />
        </div>
    );
}