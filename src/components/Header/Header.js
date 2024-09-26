import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          Bis<span className="highlight">Lite</span>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT US</a>
            </li>
            <li className="dropdown">
              <a href="#services">SERVICES</a>
              <ul className="dropdown-content">
                <li>
                  <a href="#web-design">Web Design</a>
                </li>
                <li>
                  <a href="#wordpress-design">Wordpress Design</a>
                </li>
                <li>
                  <a href="#mobile-app">Mobile App Development</a>
                </li>
                <li>
                  <a href="#internet-marketing">Internet Marketing</a>
                </li>
                <li>
                  <a href="#social-media">Social Media Management</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#blog">BLOG</a>
            </li>
            <li>
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
