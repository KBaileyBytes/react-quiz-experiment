import { createContext, useState, useRef, useEffect } from "react";

export const GameContext = createContext({
  turn: 0,
  setTurn: () => {},
  questions: [],
  resetQuestions: async () => {},
  currentQuestion: {},
  handleAnswerClick: () => {},
  totalCorrect: 0,
  setTotalCorrect: () => {},
  timeRemaining: 0,
  startGame: () => {},
  resetGame: () => {},
  gameOver: false,
  setGameOver: () => {},
});

export default function GameContextProvider({ children }) {
  const [questionList, setQuestionList] = useState([]);
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const timerRef = useRef(null);

  useEffect(() => {
    if (questionList.length > 0 && turn >= questionList.length) {
      setGameOver(true);
      resetGame();
    }
  }, [turn, questionList.length]);

  function startTimer() {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((oldState) => {
          if (oldState < 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;

            // Wait 1 second before changing the turn
            setTimeout(() => {
              setTurn((oldTurn) => {
                if (oldTurn >= 9) {
                  setGameOver(true);
                  return 10;
                } else {
                  setTimeRemaining(10);
                  startTimer();
                  return oldTurn + 1;
                }
              });
            }, 1000);

            return 0;
          }

          return oldState - 1;
        });
      }, 1000);
    }
  }

  function shuffleAnswers(incorrectAnswers, correctAnswer) {
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
  }

  async function fetchQuestionList() {
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
  }

  function handleAnswerClick(selectedAnswer, correctAnswer, questionArrayId) {
    resetGame();

    const correct = selectedAnswer === correctAnswer;

    if (correct) {
      setTotalCorrect((oldTotalCorrect) => oldTotalCorrect + 1);
    }

    updateQuestion(questionArrayId, selectedAnswer, correct);

    setTurn((oldTurn) => {
      if (oldTurn === 9) {
        setGameOver(true);
        return 10;
      }

      return oldTurn + 1;
    });

    startTimer();
    setTimeRemaining(10);
  }

  function resetGame() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  // TODO: Maybe make a [] ref for each selected answer?
  function updateQuestion(questionArrayId, answer, correct) {
    // setQuestionList((oldQuestionList) => {
    //   const oldQuestion = oldQuestionList[questionArrayId];
    //   const newQuestion = {
    //     ...oldQuestion,
    //     result: {
    //       selected: answer,
    //       correct,
    //     },
    //   };
    //   console.log([...oldQuestionList, newQuestion]);
    //   return [...oldQuestionList, newQuestion];
    // });
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
    timeRemaining,
    startGame: startTimer,
    resetGame,
    gameOver,
    setGameOver,
  };

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
}
