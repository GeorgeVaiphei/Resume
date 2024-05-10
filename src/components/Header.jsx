import React, { useEffect, useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  let overflow;

  useEffect(() => {
    menuOpen ? (overflow = "hidden") : (overflow = "auto");
    document.body.style.overflowY = overflow;
  }, [menuOpen]);

  const mobNavHandler = () => {
    setMenuOpen(false);
  };
  return (
    <>
      {menuOpen && (
        <>
          {/* ////////////////// MOBILE NAVIGATION ///////////////// */}

          <div className="mob__menu__container">
            <nav>
              <ul className="mob__menu">
                <li>
                  <a href="#about" onClick={mobNavHandler}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" onClick={mobNavHandler}>
                    Work
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={mobNavHandler}>
                    Contact
                  </a>
                </li>
                <li>
                  <hr className="mob__line" />
                </li>
                <li>
                  <span className="header__sun">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  <button className="header__btn btn">Resume</button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}

      {/* ////////////////////////////////////////////////// */}

      <header className="container header">
        <span id="resume">
          <h3>My Resume</h3>
        </span>
        <nav>
          <ul className="header__menu">
            <li>
              <a href="#about" className="header__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="header__link">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="header__link">
                Contact
              </a>
            </li>
            <li>
              <hr className="header__line" />
            </li>
            <li>
              <span className="header__sun">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLineCap="round"
                    strokeLineJoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </span>
            </li>
            <li>
              <button className="header__btn btn">Resume</button>
            </li>
          </ul>
          <span className="header__bars" onClick={menuHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLineCap="round"
                strokeLineJoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </nav>
      </header>
    </>
  );
};

export default Header;
