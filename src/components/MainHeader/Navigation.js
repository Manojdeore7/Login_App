import React from "react";
import AuthContext from "../../store/context";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(x) => {
        return;
        <nav className={classes.nav}>
          <ul>
            {x.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {x.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {x.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>;
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
