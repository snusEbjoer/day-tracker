import { Timer } from "@/components/Timer/Timer";
import { useEffect, useState } from "react";

export const Flowmadoro = () => {
  const [isEnded, setIsEnded] = useState<boolean>(false);
  const [pauseTime, setPauseTime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [isBackwards, setIsBackwards] = useState<boolean>(false);
  const toggleIsEnded = () => {
    setIsEnded((prev) => !prev);
  };

  const getTime = (num: number) => {
    setTime(num);
  };
  const calcTime = () => {
    if (time !== 0 && isEnded && !isBackwards) {
      setIsBackwards((prev) => !prev);
      setPauseTime(Math.floor(time / 5));
      console.log(time / 5);
    }
    if (!isEnded) {
      setIsBackwards((prev) => !prev);
    }
  };
  useEffect(() => {
    calcTime();
  }, [isEnded, time]);
  console.log(time);
  return (
    <>
      <Timer
        time={pauseTime}
        backwards={isBackwards}
        isEnded={isEnded}
        toggleIsEnded={toggleIsEnded}
        getTime={getTime}
      />
    </>
  );
};
