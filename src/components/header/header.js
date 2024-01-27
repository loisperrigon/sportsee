// header.js
import React from "react";
import { NavLink } from "react-router-dom"; // Utilisez Link de react-router-dom

import "./header.scss";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />

      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Acceuil
      </NavLink>
      <NavLink
        to="/profil"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Profil
      </NavLink>
      <NavLink
        to="/reglage"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Réglage
      </NavLink>
      <NavLink
        to="/communaute"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Communauté
      </NavLink>
    </header>
  );
};

export default Header;
