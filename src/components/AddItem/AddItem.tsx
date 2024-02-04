import { ChangeEvent, KeyboardEvent, useState } from "react";
import "./AddItem.css";
export const AddItem = ({ addTask }: { addTask: (task: string) => void }) => {
  const [task, setTask] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTask(e.target.value);
  };
  const handleEnterPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addTask(task);
      setTask("");
    }
  };
  return (
    <div className="add-item">
      <input
        onKeyDown={handleEnterPress}
        placeholder="Enter task name"
        className="add-input"
        type="text"
        value={task}
        onChange={handleChange}
      />
      <button
        className="add-button"
        onClick={() => {
          if (task.length === 0) {
            return;
          }
          addTask(task);
          setTask("");
        }}
      >
        Аdd
      </button>
    </div>
  );
};
