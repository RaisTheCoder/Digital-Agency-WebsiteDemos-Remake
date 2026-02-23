import React from "react";
import "./footer.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <footer className="flex flex-col justify-between bg-(--e-global-color-astglobalcolor2) text-white">
      <section className="h-fit lg:h-[200px] py-[40px] flex justify-center items-center bg-white text-black">
        <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-center w-[75%] gap-5">
          <div className="left flex flex-col gap-5 w-full lg:w-[75%]">
            <h3 className="text-[20px] lg:text-[28px] font-bold text-(--e-global-color-astglobalcolor0)">
              Would you like to start a project with us?
            </h3>
            <p className="text-[17px]">
              Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo.
              Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla
              congue libero.
            </p>
          </div>
          <div className="right">
            <button className="button button2">GET A QUOTE</button>
          </div>
        </div>
      </section>
      
      <div className="container flex items-center">
        <div className="py-10 px-10 md:px-0 flex flex-wrap flex-col md:flex-row justify-center w-full h-full gap-4 lg:gap-8">
          <div className="flex flex-col h-full w-[262.5px] gap-6 md:gap-10">
            <img
              className="w-[50%] md:w-[80%]"
              src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/site-logo-white.svg"
            />
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-5 text-[17px]">
              <Link to={"/"}>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faGoogle} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col h-full w-[262.5px] gap-6 md:gap-10">
            <h2 className="font-bold text-[22px]">Company</h2>
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
          </div>
          <div className="flex flex-col h-full w-[262.5px] gap-6 md:gap-10">
            <h2 className="font-bold text-[22px]">Business</h2>
            <ul>
              <li>
                <Link to={"/"}>Project</Link>
              </li>
              <li>
                <Link to={"/"}>Our Team</Link>
              </li>
              <li>
                <Link to={"/"}>Facts</Link>
              </li>
              <li>
                <Link to={"/"}>Customers</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col h-full w-[262.5px] gap-6 md:gap-10">
            <h2 className="font-bold text-[22px]">Get In Touch</h2>
            <ul>
              <li>Rt. 66, Downtown, Washington, DC</li>
              <li>
                <Link to={"mailto:info@example.com​"}>info@example.com​</Link>
              </li>
              <li>
                <Link to={"tel:+1-800-1234-567"}>+1-800-1234-567</Link>
              </li>
              <li>
                <Link to={"tel:+001 987-654-3210"}>+001 987-654-3210</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border-t-[0.3px] border-gray-50 py-12.5 w-full">
        <p className="text-[12px] lg:text-[14px]">
          Copyright © 2026 Digital Agency | Powered by Digital Agency
        </p>
      </div>
    </footer>
  );
};

export default footer;
