import React from "react";
import classes from "./SidebarOption.module.css";

function SidebarOption({ title, Icon }) {
  return (
    <div className={classes["sidebar_option"]}>
      {Icon && <Icon className={classes["sidebar_option__icon"]} />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      {/* <Icon /> */}
      {/* <p>{title}</p> */}
    </div>
  );
}

export default SidebarOption;
