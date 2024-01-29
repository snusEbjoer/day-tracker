import { DragEvent, DragEventHandler, useState } from "react";
import { AddItem } from "../AddItem/AddItem";

type KanbanTask = {
  id: string;
  name: string;
  taskState: string;
};
export const Kanban = () => {
  const [draggedItem, setDraggetItem] = useState<string>("");
  const [destination, setDestitanion] = useState<string>("tasks");
  const [tasks, setTasks] = useState<KanbanTask[]>([]);
  const addTask = (task: string) => {
    setTasks((prev) => [
      ...prev,
      {
        id: task,
        name: task,
        taskState: "tasks",
      },
    ]);
  };
  const handleDragStart = (e: DragEvent, id: string) => {
    setDraggetItem(id);
    console.log(draggedItem);
  };
  const handleDragEnd = () => {
    setTasks((prev) =>
      prev.map((el) =>
        el.id === draggedItem ? { ...el, taskState: destination } : el
      )
    );
    console.log(tasks);
  };
  const handleDragEnter = (e: DragEvent) => {
    setDestitanion(e.currentTarget.id);
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDestitanion("tasks");
    setDraggetItem("");
  };
  return (
    <div className="kanban">
      <div className="add-kanban-task">
        <AddItem addTask={addTask} />
      </div>
      <div className="kanban-content">
        <div className="tasks" id={"tasks"} onDragEnter={handleDragEnter}>
          {tasks.map(
            (el) =>
              el.taskState === "tasks" && (
                <div
                  key={el.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, el.id)}
                  onDragEnd={handleDragEnd}
                  onDrop={handleDrop}
                >
                  {el.name}
                </div>
              )
          )}
        </div>
        <div
          className="in-progress"
          id={"in-progress"}
          onDragEnter={handleDragEnter}
        >
          {tasks.map(
            (el) =>
              el.taskState === "in-progress" && (
                <div
                  key={el.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, el.id)}
                  onDragEnd={handleDragEnd}
                  onDrop={handleDrop}
                >
                  {el.name}
                </div>
              )
          )}
        </div>
        <div className="done"></div>
      </div>
    </div>
  );
};
