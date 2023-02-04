import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    <Link to={"/contact"}>Contact</Link>
    <Link to={"/signup"}>Sign Up</Link>
    <Link to={"/redux-counter"}>Redux Counter</Link>
  </nav>
);

export default Header;
