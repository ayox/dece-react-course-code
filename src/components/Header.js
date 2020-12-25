import React from "react";
import { Link } from "react-router-dom";
const linkStyle = {
  margin: 10,
  fontSize:20
};
export default function Header() {
  return (
    <div>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact-us" style={linkStyle}>Contact Us</Link>
      <Link to="/effect" style={linkStyle}>Counter</Link>

    </div>
  );
}
