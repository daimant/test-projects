import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/instruments" activeClassName={classes.activeLink}>
          Инструменты
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/favorites" activeClassName={classes.activeLink}>
          Избранное
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
