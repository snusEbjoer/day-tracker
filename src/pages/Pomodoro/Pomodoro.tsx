import { Timer } from "@/components/Timer";
import { ChangeEvent, useEffect, useState } from "react";
export type Pomadoro = {
  workTime: number;
  shortBreak: number;
  longBreak: number;
};
export const Pomadoro = () => {
  const [pomadoro, setPomadoro] = useState<Pomadoro>({
    workTime: 5,
    shortBreak: 20,
    longBreak: 30,
  });
  const [startTime, setStartTime] = useState<number>(pomadoro.workTime);
  const [count, setCount] = useState<number>(0);
  const [isEnded, setIsEnded] = useState<boolean>(false);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isSettingsIsShown, setIsSttingsIsShown] = useState<boolean>(false);
  const handlePomadoroChange =
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setPomadoro((prev) => ({ ...prev, [key]: Number(e.target.value) }));
    };
  const toggleIsEnded = () => {
    setIsEnded((prev) => !prev);
  };
  const calcTime = () => {
    if (isEnded && count < 4) {
      return pomadoro.shortBreak;
    }
    if (isEnded && count === 4) {
      return pomadoro.longBreak;
    }
    if (!isEnded) {
      return pomadoro.workTime;
    }
    return pomadoro.workTime;
  };
  const calcCount = () => {
    if (isEnded && count < 4) {
      setCount((prev) => prev + 1);
    }
    if (isEnded && count === 4) {
      setCount(0);
    }
  };
  useEffect(() => {
    calcCount();
  }, [isEnded]);
  return (
    <div className="pomadoro">
      <Timer
        time={calcTime()}
        backwards={true}
        toggleIsEnded={toggleIsEnded}
        isEnded={isEnded}
      />
      <div className="pomadoro-settings">
        <div className="break-settings">
          <div className="setting">
            <p>Pomodoro</p>
            <input
              type="number"
              value={pomadoro.workTime}
              onChange={handlePomadoroChange("workTime")}
            />
          </div>
          <div className="setting">
            <p>Short break</p>
            <input
              type="number"
              value={pomadoro.shortBreak}
              onChange={handlePomadoroChange("shortBreak")}
            />
          </div>
          <div className="setting">
            <p>Long break</p>
            <input
              type="number"
              value={pomadoro.longBreak}
              onChange={handlePomadoroChange("longBreak")}
            />
          </div>
        </div>
        <div>{count}</div>
      </div>
    </div>
  );
};
