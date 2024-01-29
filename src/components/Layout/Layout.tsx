import { ReactNode } from "react";
import "./Layout.css";
import { NavMenu } from "../NavMenu/NavMenu";
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="tabs">
          <NavMenu />
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
