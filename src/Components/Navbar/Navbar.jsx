"use client";
import { useContext, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../Utility/NavUtils";
import { cn } from "../../lib/utils";
import { Link, NavLink } from "react-router";
import { ContextData2 } from "../Root/Root";

export function NavbarDemo() {
  // const { myRef } = useContext(ContextData2);

  return (
    <div className="relative flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}
function Navbar() {
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-sm md:max-w-2xl mx-auto z-50"
      )}
    >
      <Menu>
        <NavLink
          onClick={() => {
            const element = document.getElementById("home");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          to="/"
          className="flex justify-center items-center"
        >
          <MenuItem item="Home"></MenuItem>
        </NavLink>
        <NavLink onClick={() => {
            const element = document.getElementById("about");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}  className="flex justify-center items-center">
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
