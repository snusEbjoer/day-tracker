import { DragEvent } from "react";
import "./KanbanItem.css";
type KanbanItemProps = {
  id: number;
  name: string;
  handleDragStart: (e: DragEvent, id: number) => void;
  handleDragEnd: (e: DragEvent) => void;
  handleItemDrop: (e: DragEvent) => void;
  handleDragOver: (e: DragEvent) => void;
};
export const KanbanItem = ({
  id,
  name,
  handleDragEnd,
  handleDragStart,
  handleItemDrop,
  handleDragOver,
}: KanbanItemProps) => {
  return (
    <div
      className="kanban-item"
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      onDragEnd={handleDragEnd}
      onDrop={handleItemDrop}
      onDragOver={handleDragOver}
    >
      <div className="item-name">{name}</div>
    </div>
  );
};
