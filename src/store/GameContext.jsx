import { createContext, useState } from "react";

export const GameContext = createContext({
  turn: 1,
  questions: [],
  resetQuestions: async () => {},
  currentQuestion: {},
  correct: 0,
  setCorrect: () => {},
});

export default function GameContextProvider({ children }) {
  const [questionList, setQuestionList] = useState([]);
  const [turn, setTurn] = useState(0);
  const [correct, setCorrect] = useState(0);

  const shuffleAnswers = (incorrectAnswers, correctAnswer) => {
    const answerList = [...incorrectAnswers, correctAnswer];

    let currentIndex = answerList.length;

    // Knuth Shuffle
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Get a remaining element
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap it with the current element.
      [answerList[currentIndex], answerList[randomIndex]] = [
        answerList[randomIndex],
        answerList[currentIndex],
      ];
    }

    return answerList;
  };

  const fetchQuestionList = async () => {
    try {
      const res = await fetch("https://the-trivia-api.com/v2/questions");
      const questions = await res.json();

      const shuffledQuestions = questions.map((question) => {
        const shuffledAnswers = shuffleAnswers(
          question.incorrectAnswers,
          question.correctAnswer
        );

        return {
          shuffledAnswers,
          ...question,
        };
      });

      setQuestionList(shuffledQuestions);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const gameContext = {
    turn,
    setTurn,
    questions: questionList,
    resetQuestions: fetchQuestionList,
    currentQuestion: questionList[turn] || {},
    correct,
    setCorrect,
  };

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
}
