import React from "react";
import "./index.css";
import logo from "../../../assets/images/logo.png";

export default props => (
  <aside className="logo">
    <a href="/" className="logo">
      <img src={logo} alt="logo"></img>
    </a>
  </aside>
);
