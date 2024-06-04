import { useContext } from "react";
import { GameContext } from "../store/GameContext";

export default function Timer(props) {
  const { timeRemaining } = useContext(GameContext);

  return (
    <div className="w-full h-2 bg-gray-300 rounded-full my-8 overflow-hidden">
      <div
        style={{ width: `${(timeRemaining / 10) * 100}%` }}
        className="h-full bg-violet-500 transition-all duration-1000 ease-linear"
      />
    </div>
  );
}
