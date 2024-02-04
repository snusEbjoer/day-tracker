import { useLocation } from "react-router-dom";
import { NavItem } from "../NavItem";
import "./NavMenu.css";

export const NavMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const isActive = (path: string) => pathname === path;
  return (
    <ul className="tabs__list">
      <div className="logo"/>
      <NavItem name={"Checklist"} path={"/checklist"} isActive={isActive("/checklist")} />
      <NavItem
        name={"Kanban"}
        path={"/kanban"}
        isActive={isActive("/kanban")}
      />
      <NavItem
        name={"Pomadoro"}
        path={"/pomadoro"}
        isActive={isActive("/pomadoro")}
      />
      <NavItem
        name={"Statistics"}
        path={"/stats"}
        isActive={isActive("/stats")}
      />
    </ul>
  );
};
