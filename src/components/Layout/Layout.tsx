import "./Layout.css";
import { NavMenu } from "../NavBar/NavMenu";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="tabs">
          <NavMenu />
        </div>
      </div>
      <div className="content"> <Outlet/> </div>
    </div>
  );
};
