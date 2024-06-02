import {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useContext,
  useImperativeHandle,
} from "react";
import { GameContext } from "../store/GameContext";

const Timer = forwardRef((props, ref) => {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const gameContext = useContext(GameContext);
  const timerRef = useRef(null);

  function startTimer() {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((oldState) => {
          if (oldState <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;

            setTimeout(() => {
              gameContext.setTurn((oldTurn) => oldTurn + 1);
              setTimeRemaining(10);
              startTimer();
            }, 1000);

            return 0;
          }

          return oldState - 1;
        });
      }, 1000);
    }
  }

  useImperativeHandle(ref, () => {
    return {
      startTimer,
    };
  });

  // Start the timer and clean up on unmount
  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full h-4 bg-gray-300 rounded-full my-4 overflow-hidden">
      <div
        style={{ width: `${(timeRemaining / 10) * 100}%` }}
        className="h-full bg-violet-500 transition-all duration-1000 ease-linear"
      />
    </div>
  );
});

export default Timer;
