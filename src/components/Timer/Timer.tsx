import { ChangeEvent, useEffect, useState } from "react";
import "./Timer.css";

export type Timer = {
  seconds: number;
  minutes: number;
  hours: number;
};
type TimerProps = {
  backwards: boolean;
  startTime: number;
  isRunning: boolean;
  isEnded: boolean;
  toggleIsRunning: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  toggleIsEnded: () => void;
};
export const Timer = ({
  backwards,
  startTime,
  isRunning,
  toggleIsEnded,
  toggleIsRunning,
  isEnded,
}: TimerProps) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: startTime || 40,
    seconds: 0,
  });
  let worker: Worker;
  const isTime = (hours: number, minutes: number, seconds: number) => {
    if (backwards && !hours && !minutes && !seconds) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (!isRunning || isEnded) return;
    if (!isTime(time.hours, time.minutes, time.seconds)) return;
    worker = new Worker(new URL("./timerWorker.ts", import.meta.url));
    worker.onmessage = (event) => {
      if (event.data === "tick") {
        if (!isRunning || isEnded) return;
        if (!isTime(time.hours, time.minutes, time.seconds)) {
          toggleIsEnded();
          return;
        }
        console.log(time);
        setTime((prevTime) => {
          const incrDecr = backwards ? -1 : +1;
          const totalSeconds =
            prevTime.hours * 3600 +
            prevTime.minutes * 60 +
            prevTime.seconds +
            incrDecr;
          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;
          if (!isTime(hours, minutes, seconds)) {
            return { minutes: 0, seconds: 0, hours: 0 };
          }
          return {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
          };
        });
      }
    };

    worker.postMessage("start");
    return () => {
      worker.postMessage("stop");
      worker.terminate();
    };
  }, [isRunning, isEnded]);

  return (
    <div>
      <div className="timer">
        <div>{time.minutes}</div>
        <div>{time.seconds}</div>
        <button onClick={toggleIsRunning}>start</button>
      </div>
    </div>
  );
};
