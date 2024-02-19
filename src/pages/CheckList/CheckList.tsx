import { useEffect, useState } from "react";
import "./CheckList.css";
import { AddItem } from "@/components/AddItem";
import { CheckListItem } from "@/components/CheckList/CheckListItem";

export const CheckList = () => {
  type Task = {
    id: string;
    name: string;
    completed: boolean;
  };
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]") || []
  );
  const changedAt = new Date(localStorage.getItem("changedAt") || "");
  const changeCompleted = (id: string) => {
    setTasks((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
    localStorage.setItem("changedAt", new Date().toString());
  };
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((el) => el.id !== id));
  };
  const addTask = (task: string) => {
    setTasks((prev) => [...prev, { id: task, completed: false, name: task }]);
  };
  const isReset = () => {
    const currDate = new Date();
    if (!changedAt) return;
    if (currDate.getFullYear() > changedAt.getFullYear()) return true;
    if (currDate.getMonth() > changedAt.getMonth()) return true;
    if (currDate.getDay() > changedAt.getDay()) return true;
    return false;
  };
  const resetTasks = () => {
    if (isReset()) {
      setTasks((prev) => prev.map((el) => ({ ...el, completed: false })));
    }
  };
  useEffect(() => {
    resetTasks();
  }, []);
  useEffect(() => {
    localStorage.setItem("changedAt", new Date().toString());
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
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
