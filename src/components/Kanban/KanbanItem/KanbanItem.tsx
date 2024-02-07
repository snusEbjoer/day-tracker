import { DragEvent } from "react";
import "./KanbanItem.css";
import classNames from "classnames";
import { CrossIcon } from "@/components/UI/icons/CrossIcon";
type KanbanItemProps = {
  id: number;
  name: string;
  handleDragStart: (e: DragEvent, id: number) => void;
  handleDragEnd: (e: DragEvent) => void;
  handleItemDrop: (e: DragEvent) => void;
  handleDragOver: (e: DragEvent) => void;
  deleteTask: (id: number) => void;
  column: string;
};
export const KanbanItem = ({
  id,
  name,
  column,
  handleDragEnd,
  handleDragStart,
  handleItemDrop,
  handleDragOver,
  deleteTask,
}: KanbanItemProps) => {
  const columnName = column.toLowerCase().replace(" ", "-") + "-mod";
  return (
    <div
      className={classNames({ "kanban-item": true, [columnName]: true })}
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      onDragEnd={handleDragEnd}
      onDrop={handleItemDrop}
      onDragOver={handleDragOver}
    >
      <div className="cross-icon" onClick={() => deleteTask(id)}>
        <CrossIcon />
      </div>
      <div className="item-name">{name}</div>
    </div>
  );
};
