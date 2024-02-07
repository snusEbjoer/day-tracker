import { Timer } from "@/components/Timer/Timer";
import { useEffect, useState } from "react";

export const Flowmadoro = () => {
  const [isPause, setIsPause] = useState<boolean>(false);
  const [isBackwards, setIsBackwards] = useState<boolean>(false);
  const [pauseTime, setPauseTime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const toggleIsPause = () => {
    setIsPause((prev) => !prev);
  };
  const toggleIsBackwards = () => {
    setIsBackwards((prev) => !prev);
  };

  const calcTime = (num: number) => {
    setTime(num);
  };
  useEffect(() => {
    setPauseTime(Math.floor(time / 5));
  }, [isPause, time]);
  return (
    <>
      <Timer
        time={pauseTime}
        backwards={isPause}
        isPause={isPause}
        toggleIsPause={toggleIsPause}
      />
    </>
  );
};
