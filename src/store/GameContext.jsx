import { createContext, useState } from "react";

export const GameContext = createContext({
  turn: 1,
  questions: [],
  getQuestions: async () => {},
  currentQuestion: {},
  correct: 0,
  setCorrect: () => {},
});

export default function GameContextProvider({ children }) {
  const [questionList, setQuestionList] = useState([]);
  const [turn, setTurn] = useState(0);
  const [correct, setCorrect] = useState(0);

  const fetchQuestionList = async () => {
    try {
      const res = await fetch("https://the-trivia-api.com/v2/questions");
      const questions = await res.json();

      setQuestionList(questions);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const gameContext = {
    turn,
    setTurn,
    questions: questionList,
    getQuestions: fetchQuestionList,
    currentQuestion: questionList[turn] || {},
    correct,
    setCorrect,
  };

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
}
