import { useLocation } from "react-router-dom";
import { NavItem } from "../NavItem";
import "./NavMenu.css";
import { ChecklistIcon } from "@/components/UI/icons/ChecklistIcon";
import { KanbanIcon } from "@/components/UI/icons/KanbanIcon";
import { PomadoroIcon } from "@/components/UI/icons/PomodoroIcon";
import { StatisticksIcon } from "@/components/UI/icons/StatisticsIcon";
export const NavMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const isActive = (path: string) => pathname === path;
  return (
    <ul className="tabs__list">
      <NavItem
        name={"Checklist"}
        path={"/"}
        isActive={isActive("/")}
        icon={<ChecklistIcon isActive={isActive("/")} />}
      />
      <NavItem
        name={"Kanban"}
        path={"/kanban"}
        isActive={isActive("/kanban")}
        icon={<KanbanIcon isActive={isActive("/kanban")} />}
      />
      <NavItem
        name={"Pomadoro"}
        path={"/pomadoro"}
        isActive={isActive("/pomadoro")}
        icon={<PomadoroIcon isActive={isActive("/pomadoro")} />}
      />
      <NavItem
        name={"Flowmadoro"}
        path={"/flowmadoro"}
        isActive={isActive("/flowmadoro")}
        icon={<StatisticksIcon isActive={isActive("/flowmadoro")} />}
      />
    </ul>
  );
};
