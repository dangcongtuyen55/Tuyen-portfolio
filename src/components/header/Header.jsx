import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";
export const Header = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <div className="header">
        <nav className="nav container">
          <Link to={""} className="nav__logo">
            TUYEN
          </Link>
          <div className={hide ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link to={""} className="nav__link active__link">
                  <i className="nav__icon">
                    <HomeIcon />
                  </i>
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to={""} className="nav__link">
                  <i className="nav__icon">
                    <PersonIcon />
                  </i>
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to={""} className="nav__link">
                  <i className="nav__icon">
                    <CodeIcon />
                  </i>
                  Skills
                </Link>
              </li>
              <li className="nav__item">
                <Link to={""} className="nav__link">
                  <i className="nav__icon">
                    <ContactEmergencyIcon />
                  </i>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav__close" onClick={() => setHide(!hide)}>
              <CloseIcon />
            </div>
          </div>
          <div className="nav__toggle" onClick={() => setHide(!hide)}>
            <MenuIcon />
          </div>
        </nav>
      </div>
    </>
  );
};
