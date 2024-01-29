import { ChangeEvent, useState } from "react";
import "./AddItem.css";
export const AddItem = ({ addTask }: { addTask: (task: string) => void }) => {
  const [task, setTask] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleChange} />
      <button
        onClick={() => {
          addTask(task);
          setTask("");
        }}
      >
        add
      </button>
    </div>
  );
};
