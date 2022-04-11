import React, { useContext } from "react";
import classes from "./Sidebar.module.css";
import logo from "../../../assets/spotify_logo.jpg";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AuthContext from "../../../store/auth-context";

function Sidebar() {
  const ctx = useContext(AuthContext);
  console.log(ctx.playlist.name);
  return (
    <div className={classes["sidebar"]}>
      <img
        className={classes["sidebar__logo"]}
        src={logo}
        alt="Spotify Logo"
      ></img>
      <SidebarOption title="Home" Icon={HomeIcon}></SidebarOption>
      <SidebarOption title="Search" Icon={SearchIcon}></SidebarOption>
      <SidebarOption
        title="Your Library"
        Icon={PlayCircleFilledWhiteIcon}
      ></SidebarOption>
      <br />
      <strong className={classes["sidebar__title"]}>PLAYLISTS</strong>
      <hr />

      {ctx.playlist?.items?.map((playlist) => {
        <SidebarOption title={playlist.name} />;
      })}
      {/* <SidebarOption title="Hip Hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="RnB" /> */}
    </div>
  );
}

export default Sidebar;
