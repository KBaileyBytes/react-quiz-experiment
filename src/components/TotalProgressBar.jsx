import { GameContext } from "../store/GameContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

export default function TotalProgressBar() {
  const { turn, questions } = useContext(GameContext);

  function determineStyle() {
    return;
  }

  return (
    <div className="relative w-full my-8">
      <div className="relative flex justify-between items-center">
        {questions.map((_, index) => (
          <div key={index} className="flex-2 flex items-center">
            <div className="relative flex-1">
              <div
                className={`flex justify-center items-center  w-12 h-12 rounded-full border-4 ${
                  index < turn
                    ? "bg-green-500 border-green-700"
                    : "bg-white border-gray-300"
                }`}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              {index < questions.length - 1 && (
                <div
                  className={`absolute border-2 top-1/2 transform -translate-y-1/2 left-full w-full h-2 ${
                    index < turn
                      ? "bg-green-500 border-green-700"
                      : "bg-white border-gray-300"
                  }`}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
