"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../Utility/NavUtils";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar() {

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-sm md:max-w-2xl mx-auto z-50")}>
      <Menu>
        <NavLink to="/" className="flex justify-center items-center">
          <MenuItem item="Home"></MenuItem>
        </NavLink>
        <NavLink to="/about" className="flex justify-center items-center">
          <MenuItem item="About"></MenuItem>
        </NavLink>
        <NavLink to="/projects" className="flex justify-center items-center">
          <MenuItem item="Projects"></MenuItem>
        </NavLink>
        <NavLink to="/contact" className="flex justify-center items-center">
          <MenuItem item="Contact"></MenuItem>
        </NavLink>
        {/* <button className="relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34e5eb_0%,#ffff_50%,#81d3e3_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Border Magic
        </span>
      </button> */}
      </Menu>
    </div>
  );
}
