import { Button } from "@/components/UI/Button/Button";
import "./CheckListItem.css";
import { CrossIcon } from "@/components/UI/icons/CrossIcon";
import { CheckIcon } from "@/components/UI/icons/CheckIcon";
import classNames from "classnames";
type CheckListItemProps = {
  name: string;
  completed: boolean;
  changeCompleted: () => void;
  deleteTask: () => void;
};
export const CheckListItem = ({
  name,
  completed,
  changeCompleted,
  deleteTask,
}: CheckListItemProps) => {
  return (
    <div className="checklist__item">
      <div className={classNames({ item__title: true, completed: completed })}>
        {name}
      </div>
      <div className="item__buttons">
        <Button onClick={changeCompleted} icon={<CheckIcon />} />
        <Button onClick={deleteTask} icon={<CrossIcon />} />
      </div>
    </div>
  );
};
