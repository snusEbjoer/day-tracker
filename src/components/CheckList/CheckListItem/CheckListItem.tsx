import "./CheckListItem.css";
type CheckListItemProps = {
  name: string;
  completed: boolean;
  changeCompleted: () => void;
  deleteTask: () => void;
};
export const CheckListItem = ({
  name,
  // completed,
  changeCompleted,
  deleteTask,
}: CheckListItemProps) => {
  return (
    <div className="wrapper">
      <div className="item__title">{name}</div>
      <div className="item__buttons">
        <button onClick={changeCompleted}>done</button>
        <button onClick={deleteTask}>delete</button>
      </div>
    </div>
  );
};
