import { useEffect, useState } from "react";
import "./Timer.css";

type TimerProps = {
  time: number;
  backwards: boolean;
  toggleIsEnded: () => void;
  isEnded: boolean;
  getTime?: (num: number) => void;
};
export const Timer = ({
  time,
  backwards,
  toggleIsEnded,
  isEnded,
  getTime,
}: TimerProps) => {
  const [seconds, setSeconds] = useState<number>(time);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const toggleIsRunning = () => {
    if (!isEnded && getTime) {
      getTime(seconds);
      toggleIsEnded();
    }
    setIsRunning((prev) => !prev);
  };
  const incDec = backwards ? -1 : 1;
  let worker: Worker;
  useEffect(() => {
    if (isEnded) {
      setSeconds(time);
    }
    if (!isRunning) return;
    let localTime = seconds + 1;
    worker = new Worker(new URL("./timerWorker", import.meta.url));
    worker.onmessage = (event: MessageEvent) => {
      if (event.data === "tick") {
        setSeconds((prev) => prev + incDec);
        localTime += incDec;
        if (localTime === 0 && backwards) {
          toggleIsRunning();
          toggleIsEnded();
          setSeconds(0);
        }
        if (getTime && isEnded) {
          getTime(seconds);
        }
      }
    };

    worker.postMessage("start");
    return () => {
      worker.postMessage("stop");
      worker.terminate();
    };
  }, [time, isRunning, backwards, isEnded]);
  useEffect(() => {
    setSeconds(time);
  }, [time]);
  return (
    <div>
      <div className="timer">
        <div>{Math.floor(seconds / 60)}</div>
        <div>{seconds % 60}</div>
        <button onClick={toggleIsRunning}>start</button>
      </div>
    </div>
  );
};
