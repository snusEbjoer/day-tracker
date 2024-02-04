import classNames from "classnames";
import { Link } from "react-router-dom";
import "./NavItem.css";
type NavItemProps = {
  name: string;
  path: string;
  isActive: boolean;
};
export const NavItem = ({ name, path, isActive }: NavItemProps) => {
  return (
    <li
      className={classNames({
        "nav-item": true,
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
        {name}
      </Link>
    </li>
  );
};
