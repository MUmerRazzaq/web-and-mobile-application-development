import { NavLink } from "react-router";
import React from "react";
import "./header.css";
import img from "../../assets/img.jpg";

function Header() {
  return (
    <header>
      <div
        style={{ backgroundColor: "#282c34", padding: "20px", color: "white" }}
      >
        <div
          style={{
            justifyContent: "left",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            position: "relative",
          }}
        >
          <img
            src={img}
            alt="img"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              alignItems: "left",
            }}
          />
          <h1 style={{ color: "#4a5f8aff" }}>My React App</h1>
          <nav style={{ position: "absolute", right: "20px" }}>
            <NavLink
              to="/"
              style={{ margin: "10px", textDecoration: "none", color: "white" }}
              activeStyle={{ fontWeight: "bold", color: "#61dafb" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={{ margin: "10px", textDecoration: "none", color: "white" }}
              activeStyle={{ fontWeight: "bold", color: "#61dafb" }}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              style={{ margin: "10px", textDecoration: "none", color: "white" }}
              activeStyle={{ fontWeight: "bold", color: "#61dafb" }}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
