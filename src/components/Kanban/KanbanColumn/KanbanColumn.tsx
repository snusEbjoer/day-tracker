import { KanbanTask } from "@/pages/Kanban";
import { DragEvent } from "react";
import { KanbanItem } from "../KanbanItem";
import "./KanbanColumn.css";
type KanbanColumnProps = {
  name: string;
  tasks: KanbanTask[];
  deleteTask: (id: number) => void;
  handleDragEnter: (e: DragEvent, name: string) => void;
  handleDragStart: (e: DragEvent, id: number) => void;
  handleDragEnd: (e: DragEvent) => void;
  handleDrop: (e: DragEvent) => void;
  handleItemDrop: (e: DragEvent, id: number) => void;
  handleDragOver: (e: DragEvent) => void;
};

export const KanbanColumn = ({
  name,
  tasks,
  deleteTask,
  handleDragEnd,
  handleDragEnter,
  handleDragStart,
  handleDrop,
  handleItemDrop,
  handleDragOver,
}: KanbanColumnProps) => {
  return (
    <div
      onDragEnter={(e) => handleDragEnter(e, name)}
      className="kanban-col"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="column-title">{name}</div>
      <div className="column-items">
        {tasks
          .sort((a, b) => a.columnPosition - b.columnPosition)
          .map(
            (el) =>
              el.columnName === name && (
                <KanbanItem
                  column={name}
                  key={el.id}
                  name={el.name}
                  id={el.id}
                  handleDragStart={handleDragStart}
                  handleDragEnd={handleDragEnd}
                  handleItemDrop={(e) => handleItemDrop(e, el.id)}
                  handleDragOver={handleDragOver}
                  deleteTask={deleteTask}
                />
              )
          )}
      </div>
    </div>
  );
};
