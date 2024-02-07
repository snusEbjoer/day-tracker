import { useEffect, useState } from "react";
import "./Timer.css";
import { useLocation } from "react-router-dom";

type TimerProps = {
  time: number;
  backwards: boolean;
  toggleIsPause: () => void;
  isPause: boolean;
};
export const Timer = ({
  time,
  backwards,
  toggleIsPause,
  isPause,
}: TimerProps) => {
  const [seconds, setSeconds] = useState<number>(time);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const toggleIsRunning = () => {
    setIsRunning((prev) => !prev);
  };
  const incDec = backwards ? -1 : 1;
  let worker: Worker;
  useEffect(() => {
    if (!isRunning) return;
    let localTime = seconds + 1;
    worker = new Worker(new URL("./timerWorker.ts", import.meta.url));
    worker.onmessage = (event: MessageEvent) => {
      if (event.data === "tick") {
        setSeconds((prev) => prev + incDec);
        localTime += incDec;
        if (isRunning && localTime === 0 && backwards) {
          toggleIsRunning();
          toggleIsPause();
          setSeconds(time);
        }
      }
    };

    worker.postMessage("start");
    return () => {
      worker.postMessage("stop");
      worker.terminate();
    };
  }, [isRunning, isPause, time]);
  return (
    <div>
      <div className="timer">
        <div>{0}</div>
        <div>{seconds}</div>
        <button onClick={toggleIsRunning}>start</button>
      </div>
    </div>
  );
};
