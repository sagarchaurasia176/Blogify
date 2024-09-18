import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" fixed top-0 w-full flex justify-between bg-white p-3 shadow-md">
      <div className="  p-1 text-center text-black font-semibold  ">
        <NavLink to="/">
          <h1>Blogify</h1>
        </NavLink>
      </div>
      <span>butoo

      </span>
    </div>
  );
};

export default Navbar;
