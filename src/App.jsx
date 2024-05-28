import Game from "./components/Game";
import GameContextProvider from "./store/GameContext";
import TotalProgressBar from "./components/TotalProgressBar";
import Question from "./components/Question";

function App() {
  return (
    <GameContextProvider>
      <Game>
        <section className="w-[50rem] p-16 bg-slate-700 rounded-lg border-2 border-slate-600 drop-shadow-md">
          <TotalProgressBar />
          <Question />
        </section>
      </Game>
    </GameContextProvider>
  );
}

export default App;
