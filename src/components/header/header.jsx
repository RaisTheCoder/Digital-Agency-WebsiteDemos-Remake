import React, { useState } from "react";
import { Link } from "react-router";
import "./header.css";

const header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex flex-col">
      <div className="container">
        <div className="left">
          <Link to={"/"}>
            <img src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/site-logo-white.svg" />
          </Link>
        </div>
        <div className="right">
          <nav className="hidden gap-3 lg:flex items-center">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
            <button className="hidden lg:flex button">REQUEST QUOTE</button>
            <button
              className="flex lg:hidden button"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <svg
                className="ast-mobile-svg ast-menu-svg"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
      <div
        className={`absolute md:hidden top-0 left-0 w-full bg-white transform transition-transform duration-300 ${
          isOpen ? "translate-y-[40%]" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col w-full">
          <div className="p-4 border-b">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="p-4 border-b">
            <Link to={"/about"}>About</Link>
          </div>
          <div className="p-4 border-b">
            <Link to={"/services"}>Services</Link>
          </div>
          <div className="p-4 border-b">
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
