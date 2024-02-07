import { Timer } from "@/components/Timer/Timer";
import { ChangeEvent, useEffect, useState } from "react";
type Pomadoro = {
  minutes: number;
  shortBreak: number;
  longBreak: number;
};
export const Pomadoro = () => {
  const [startTime, setStartTime] = useState<number>(0);
  const [pomadoro, setPomadoro] = useState<Pomadoro>({
    minutes: startTime || 0.1,
    shortBreak: 10,
    longBreak: 15,
  });
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isEnded, setIsEnded] = useState<boolean>(false);
  const [pauseIsEnded, setPauseIsEnded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const toggleIsEnded = () => {
    setIsEnded((prev) => !prev);
  };
  const toggleIsRunning = () => {
    setIsRunning((prev) => !prev);
  };
  const countChange = () => {
    setCount((prev) => prev + 1);
  };
  const handlePomadoroChange =
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setPomadoro((prev) => ({ ...prev, [key]: e.target.value }));
    };
  const handlePause = () => {
    if (isEnded && count < 4) {
      countChange();
      toggleIsEnded();
      return pomadoro.shortBreak;
    } else if (isEnded && count == 4) {
      toggleIsEnded();
      setCount(0);
      return pomadoro.longBreak;
    } else {
      return pomadoro.minutes;
    }
  };
  return (
    <>
      <Timer
        startTime={handlePause()}
        toggleIsEnded={toggleIsEnded}
        toggleIsRunning={toggleIsRunning}
        isRunning={isRunning}
        isEnded={isEnded}
        backwards={true}
      />
    </>
  );
};
