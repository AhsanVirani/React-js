import React, { useContext } from "react";
import classes from "./Player.module.css";
import AuthContext from "../../store/auth-context";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function Player() {
  const ctx = useContext(AuthContext);
  return (
    <div className={classes["player"]}>
      <div className={classes["player__body"]}>
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
