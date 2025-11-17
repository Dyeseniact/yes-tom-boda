// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = window.location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL A SECCIÓN
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 90;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`
        w-full fixed top-0 left-0 z-[9999]
        py-5 flex items-center transition-all duration-300

        ${isHome && !scrolled
          ? "bg-transparent backdrop-blur-0 shadow-none"
          : "bg-white/70 backdrop-blur-md shadow-md"
        }
      `}
    >
      <div className="w-full flex justify-between items-center px-6 sm:px-12">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="logo"
            className={`w-[50px] h-[50px] object-contain ${isHome && !scrolled ? "invert brightness-200" : ""
              }`}
          />
          <p
            className={`
              text-[18px] font-bold cursor-pointer flex transition-colors
              ${isHome && !scrolled ? "text-white" : "text-[#444]"}
            `}
          >
            Yesenia & Tomas
          </p>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
        text-[18px] font-medium cursor-pointer transition-colors
        ${isHome && !scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-[#444] hover:text-black"}
      `}
              onClick={() => {
                setActive(nav.title);
                handleScrollTo(nav.id);
              }}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        {/* MENU MOBILE */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`
      w-[28px] h-[28px] object-contain
      ${isHome && !scrolled ? "invert brightness-200" : ""}
    `}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"}
      p-6 bg-white/90 backdrop-blur-md shadow-lg
      absolute top-20 right-0 mx-4 my-2 min-w-[140px] 
      z-10 rounded-xl
    `}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="text-[16px] font-medium cursor-pointer text-[#444]"
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                    handleScrollTo(nav.id);
                  }}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
