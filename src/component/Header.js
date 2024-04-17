import React, { useState } from "react";

const Header = () => {
  const [hrefggle, sethrefggle] = useState(false);

  return (
    <div>
      <div className="flex justify-between px-5 py-5  font-sri-font bg-secondary"
        onClick={() => sethrefggle(!hrefggle)} >
        <div className="font-bold text-2xl ">
          Anandan</div>
        <nav className="header-section mt-2 ">
          <ul className="flex gap-5  sm:hidden md:flex text-2xl">
            <li >
              {" "}
              <a
                href="/" className=" hover:text-black  font-bold">Home</a>{" "}
            </li>
            <li>
              <a
                href="#about" className=" hover:text-black  font-bold">About</a>{" "}
            </li>
            <li>
              <a
                href="#projects" className=" hover:text-black  font-bold"
              >Projects</a>{" "}
            </li>
            <li>
              <a href="#resume" className=" hover:text-black  font-bold">Resume</a>{" "}
            </li>
            <li>
              <a href="#contact"
                className=" hover:text-black  font-bold"
              >Contact</a>{" "}
            </li>
          </ul>
        </nav>
        {hrefggle && (
          <nav className="header-section block md:hidden ">
            <ul className="flex flex-col text-white mobile-nav">
              <li>
                {" "}
                <a href="/">Home</a>{" "}
              </li>
              <li>
                <a href="#about">About</a>{" "}
              </li>
              <li>
                <a href="#projects">Projects</a>{" "}
              </li>
              <li>
                <a href="#resume">Resume</a>{" "}
              </li>
              <li>
                <a href="#contact">Contact</a>{" "}
              </li>
            </ul>
          </nav>
        )}
        <button onClick={() => sethrefggle(!hrefggle)} className="block md:hidden">
          menu
        </button>
      </div>
    </div>
  );
};

export default Header;

