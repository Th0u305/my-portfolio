"use client";
import { useContext, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../Utility/NavUtils";
import { cn } from "../../lib/utils";
import { Link, NavLink } from "react-router";
import { ContextData2 } from "../Root/Root";

export function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}
function Navbar() {
  const { myRef } = useContext(ContextData2);

  const handleClick = () => {
    myRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-sm md:max-w-2xl mx-auto z-50"
      )}
    >
      <Menu>
        <NavLink
          to="/"
          className="text-md font-medium text-white hover:text-gray-400 focus:text-cyan-300"
        >
          Home
        </NavLink>
        <NavLink
          onClick={handleClick}
          to="/"
          className="text-md font-medium text-white hover:text-gray-400 focus:text-cyan-300"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="text-md font-medium text-white hover:text-gray-400 focus:text-cyan-300"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="text-md font-medium text-white hover:text-gray-400 focus:text-cyan-300"
        >
          Contact
        </NavLink>
      </Menu>
    </div>
  );
}
