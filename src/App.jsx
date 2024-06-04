import Game from "./components/Game";
import GameContextProvider from "./store/GameContext";
import TotalProgressBar from "./components/TotalProgressBar";
import Question from "./components/Question";
import Timer from "./components/Timer";

function App() {
  return (
    <GameContextProvider>
      <div className="bg-transparent flex flex-col items-center py-12">
        <h1 className="text-7xl font-bold font-custom">Quizzler</h1>
      </div>
      <Game />
    </GameContextProvider>
  );
}

export default App;
