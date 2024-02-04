import { useLocation } from "react-router-dom";
import { NavItem } from "../NavItem";
import "./NavMenu.css";
export const NavMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const isActive = (path: string) => pathname === path;
  return (
    <ul className="tabs__list">
      <NavItem name={"Checklist"} path={"/"} isActive={isActive("/")} />
      <NavItem
        name={"Kanban"}
        path={"/kanban"}
        isActive={isActive("/kanban")}
      />
      <NavItem
        name={"Pomadoro timer"}
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
