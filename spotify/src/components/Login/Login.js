import React from "react";
import classes from "./Login.module.css";
import logo from "../../assets/spotify_logo.jpg";
import { loginUrl } from "../../spotify";

export default function Login() {
  return (
    <div className={classes.login}>
      <img
        className={classes["login-logo"]}
        src={logo}
        alt="Spotify Logo"
      ></img>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
