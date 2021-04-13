/**
 * @file components/header/index.jsx
 * @brief Presents the header at the top of the page.
 */

import React, { useState } from "react";
import Logo from "../svg/logo";
import IconHamburger from "../svg/icon-hamburger";
import "./index.scss";

export default () => {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  const onMenuToggle = () => {
    setMobileMenuShown((shown) => !shown);
  };

  const resetToggle = () => {
    setMobileMenuShown(false);
  };

  return (
    <header className={`header ${mobileMenuShown && `header--shown`}`}>
      <div className="container header__container">
        <Logo className="header__logo" />
        <button
          className="header__toggle"
          aria-label="Toggle Mobile Menu"
          onClick={onMenuToggle}
        >
          <IconHamburger className="header__toggle-icon" />
        </button>
        <nav className="header__nav">
          <a href="#" className="header__nav-link">
            About
          </a>
          <a href="#" className="header__nav-link">
            Discover
          </a>
          <a href="#" className="header__nav-link">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};
