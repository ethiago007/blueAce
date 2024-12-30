import React, { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pages = ["Features", "How it Works", "Pricing"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <svg
            width="81"
            height="49"
            viewBox="0 0 81 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.25 47.1956C59.0367 43.5468 44.0856 34.7599 44.0856 24.5C44.0856 14.2401 59.0367 5.45319 80.25 1.80437C73.4867 0.64105 66.0869 0 58.3322 0C26.2543 0 0.25 10.969 0.25 24.5C0.25 38.031 26.2543 49 58.3322 49C66.0869 49 73.4867 48.359 80.25 47.1956Z"
              fill="#212AE3"
            />
          </svg>
          <span>InteractAI</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links" >
          {pages.map((page) => (
            <a key={page} href={`#${page.toLowerCase().replace(/\s/g, "-")}`}>
              {page}
            </a>
          ))}
          <button className="navbar-demo-button">Watch Demo</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-menu-toggle"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar-mobile-menu ${
          isMobileMenuOpen ? "open" : ""
        }`}
      >
        {/* Close Button */}
        <button
          className="navbar-close-button"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ✕
        </button>

        {pages.map((page, index) => (
          <a
            key={page}
            href={`#${page.toLowerCase().replace(/\s/g, "-")}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {page}
          </a>
        ))}
        <button
          className="navbar-demo-button"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Watch Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
