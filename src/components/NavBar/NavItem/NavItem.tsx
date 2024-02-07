import classNames from "classnames";
import { Link } from "react-router-dom";
import "./NavItem.css";
type NavItemProps = {
  name: string;
  path: string;
  isActive: boolean;
  icon: JSX.Element;
};
export const NavItem = ({ name, path, isActive, icon }: NavItemProps) => {
  return (
    <li
      className={classNames({
        "nav-item": true,
        focused: isActive,
        "not-focused": !isActive,
      })}
    >
      <Link
        className={classNames({
          link: true,
          focused: isActive,
          "not-focused": !isActive,
        })}
        to={path}
      >
        {icon}
        {name}
      </Link>
    </li>
  );
};
