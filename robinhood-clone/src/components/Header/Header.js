import React from "react";
import Logo from "../UI/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={100} />
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <input placeholder="Search" type="text"></input>
        </div>
      </div>
      {/* menu items */}
      <div className="header__menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
