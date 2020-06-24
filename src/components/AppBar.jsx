import React from "react";
import logo from "../img/logo.png";

// code for inline style and you have to
// use a constant that has all the value in it
// as a dictionary.
const style = {
  fontSize: 20,
  color: "#333"
};

function AppBar() {
  return (
    <nav style={style}>
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Privacy</li>
        <li>Shop</li>
      </ul>
    </nav>
  );
}

export default AppBar;
