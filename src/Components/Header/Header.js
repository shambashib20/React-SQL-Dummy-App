import React from "react";
import Logo from "../../images/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <img src={Logo} alt="DefaultLogo" />
        </div>
        <div className="logo-name">
          <h2>SQLCompiler</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
