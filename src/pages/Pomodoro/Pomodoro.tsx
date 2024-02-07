import { Timer } from "@/components/Timer";
import { ChangeEvent, useEffect, useState } from "react";
export type Pomadoro = {
  workTime: number;
  shortBreak: number;
  longBreak: number;
};
export const Pomadoro = () => {
  const [pomadoro, setPomadoro] = useState<Pomadoro>({
    workTime: 1,
    shortBreak: 2,
    longBreak: 3,
  });
  const [startTime, setStartTime] = useState<number>(pomadoro.workTime);
  const [count, setCount] = useState<number>(0);
  const [isPause, setIsPause] = useState<boolean>(false);
  const handlePomadoroChange =
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setPomadoro((prev) => ({ ...prev, [key]: e.target.value }));
    };
  const toggleIsPause = () => {
    setIsPause((prev) => !prev);
  };
  const changeTime = () => {
    if (!isPause && count < 4) {
      setStartTime(pomadoro.shortBreak);
      setCount((prev) => prev + 1);
    }
    if (!isPause && count === 4) {
      setCount(0);
      setStartTime(pomadoro.longBreak);
    }
    if (isPause) {
      setStartTime(pomadoro.workTime);
    }
  };
  useEffect(() => {
    changeTime();
  }, [isPause]);
  return (
    <>
      <Timer
        time={startTime}
        backwards={true}
        isPause={isPause}
        toggleIsPause={toggleIsPause}
      />
    </>
  );
};
