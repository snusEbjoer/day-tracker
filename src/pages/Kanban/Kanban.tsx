import { DragEvent, useEffect, useState } from "react";
import { AddItem } from "@/components/AddItem";
import { KanbanColumn } from "@/components/Kanban/KanbanColumn";
import "./Kanban.css";
export type KanbanTask = {
  id: number;
  name: string;
  columnName: string;
  columnPosition: number;
};

export const Kanban = () => {
  const [draggedItem, setDraggedItem] = useState<number>(0);
  const [destination, setDestitanion] = useState<string>("Tasks");
  const [tasks, setTasks] = useState<KanbanTask[]>(
    JSON.parse(localStorage.getItem("kanban") || "[]") || []
  );
  const addTask = (task: string) => {
    setTasks((prev) => [
      ...prev,
      {
        id: lastId(tasks) + 1,
        name: task,
        columnName: "Tasks",
        columnPosition: findLastInCol(prev, "Tasks") + 1,
      },
    ]);
  };
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((el) => el.id !== id));
  };
  const lastId = (arr: KanbanTask[]) => {
    return arr.reduce((acc, v) => (acc > v.id ? acc : v.id), 1);
  };

  const findLast = (arr: KanbanTask[]) =>
    arr.reduce(
      (acc, { columnPosition }) =>
        acc < columnPosition ? columnPosition : acc,
      0
    );

  const findLastInCol = (arr: KanbanTask[], name: string) => {
    const newArr = arr.filter((el) => el.columnName === name);
    return findLast(newArr);
  };

  const handleDragStart = (_e: DragEvent, id: number) => {
    setDraggedItem(id);
  };
  const handleDragEnd = (e: DragEvent) => {
    e.preventDefault();
    let acc = 1;
    setTasks((prev) =>
      prev.map((el) => {
        if (el.columnName === destination) {
          return { ...el, columnPosition: acc++ };
        }
        return el;
      })
    );
    setDestitanion("Tasks");
    setDraggedItem(0);
  };
  const handleDragEnter = (_e: DragEvent, name: string) => {
    setDestitanion(name);
  };
  const handleItemDrop = (e: DragEvent, id: number) => {
    const item = tasks.find((el) => el.id === draggedItem);

    if (!item || item.columnName !== destination) return;

    const itemDraggedOver = tasks.find((el) => el.id === id);

    if (!itemDraggedOver) return;

    e.stopPropagation();

    setTasks((prev) =>
      prev.map((el) => {
        if (el.id === draggedItem) {
          return { ...el, columnPosition: itemDraggedOver.columnPosition };
        } else if (el.id === itemDraggedOver.id) {
          return { ...el, columnPosition: item.columnPosition };
        }
        return el;
      })
    );
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setTasks((prev) =>
      prev.map((el) =>
        el.id === draggedItem
          ? {
              ...el,
              columnName: destination,
              columnPosition: findLastInCol(prev, destination) + 1,
            }
          : el
      )
    );
  };
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const addColProps = (key: string, name: string) => ({
    deleteTask,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
    handleDragOver,
    handleItemDrop,
    handleDrop,
    tasks,
    key,
    name,
  });
  useEffect(() => {
    localStorage.setItem("kanban", JSON.stringify(tasks));
  });
  return (
    <div className="kanban">
      <div className="add-kanban-task">
        <AddItem addTask={addTask} />
      </div>
      <div className="kanban-content">
        <KanbanColumn {...addColProps("tasks", "Tasks")} />
        <KanbanColumn {...addColProps("in-progress", "In Progress")} />
        <KanbanColumn {...addColProps("done", "Done")} />
      </div>
    </div>
  );
};
