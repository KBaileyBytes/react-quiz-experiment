import { createContext, useState } from "react";

export const GameContext = createContext({
  turn: 0,
  setTurn: () => {},
  questions: [],
  resetQuestions: async () => {},
  currentQuestion: {},
  handleAnswerClick: () => {},
  totalCorrect: 0,
  setTotalCorrect: () => {},
  gameOver: false,
});

export default function GameContextProvider({ children }) {
  const [questionList, setQuestionList] = useState([]);
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);

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

  function handleAnswerClick(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
      console.log("Correct!");
      setTotalCorrect((oldTotalCorrect) => oldTotalCorrect + 1);
    }

    if (turn === 9) {
      console.log("Game over");
      setGameOver(true);
    } else {
      setTurn((oldTurn) => oldTurn + 1);
    }
  }

  const gameContext = {
    turn,
    setTurn,
    questions: questionList,
    resetQuestions: fetchQuestionList,
    currentQuestion: questionList[turn] || {},
    handleAnswerClick,
    totalCorrect,
    setTotalCorrect,
    gameOver,
  };

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
}
