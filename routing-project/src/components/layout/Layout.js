import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavigaton from "./MainNavigaton";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigaton />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
