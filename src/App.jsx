import Game from "./components/Game";
import QuestionContainer from "./components/QuestionContainer";
import GameContextProvider from "./store/GameContext";

function App() {
  return (
    <GameContextProvider>
      <Game className="flex items-center justify-center min-h-screen pb-12">
        <QuestionContainer className="w-[50rem] p-16 bg-slate-700 rounded-lg border-2 border-slate-600 drop-shadow-md" />
      </Game>
    </GameContextProvider>
  );
}

export default App;
