"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

import logo from "../images/logo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about Us",
    },
    {
      id: 3,
      link: "blogs",
    },
    {
      id: 4,
      link: "form",
    },

    {
      id: 5,
      link: "contact",
    },
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, y: "100%", x: "-40%" },
  };

  return (
    <div className="flex justify-between z-10 items-center w-full h-[6%] px-5 text-white bg-black overflow-hidden">
      <Image src={logo} className="h-20 w-20 " />

      <h1 className="text-2xl font-mono font-bold ml-0">BlogGlobe</h1>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={"#" + link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-gray-300 md:hidden z-30"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black z-20">
          {links.map(({ id, link }) => (
            <motion.nav
              className="text-gray-300 hover:scale-105 hover:text-white duration-200 link-underline"
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => {
                    setNav(!nav);
                    setIsOpen((isOpen) => !isOpen);
                  }}
                  href={"#" + link}
                >
                  {link}
                </Link>
              </li>
            </motion.nav>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
