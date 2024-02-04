import { useState } from "react";
import "./CheckList.css";
import { AddItem } from "../../components/AddItem/AddItem";
import { CheckListItem } from "../../components/CheckListItem/CheckListItem";

export const CheckList = () => {
  type Task = {
    id: string;
    name: string;
    completed: boolean;
  };
  const [tasks, setTasks] = useState<Task[]>([]);
  const changeCompleted = (id: string) => {
    setTasks((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((el) => el.id !== id));
  };
  const addTask = (task: string) => {
    setTasks((prev) => [...prev, { id: task, completed: false, name: task }]);
  };
  return (
    <div className="checklist">
      <div className="checklist__add-item">
        <AddItem addTask={addTask} />
      </div>
      <div className="checklist__items">
        {tasks.map((el) => (
          <CheckListItem
            key={el.id}
            name={el.name}
            completed={el.completed}
            deleteTask={() => deleteTask(el.id)}
            changeCompleted={() => changeCompleted(el.id)}
          />
        ))}
      </div>
    </div>
  );
};
