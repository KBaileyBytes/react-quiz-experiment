import Game from "./components/Game";
import GameContextProvider from "./store/GameContext";
import TotalProgressBar from "./components/TotalProgressBar";
import Question from "./components/Question";
import Timer from "./components/Timer";
import { useRef } from "react";

function App() {
  const timerRef = useRef();

  return (
    <GameContextProvider>
      <Game>
        <TotalProgressBar />
        <Timer ref={timerRef} />
        <Question />
      </Game>
    </GameContextProvider>
  );
}

export default App;
