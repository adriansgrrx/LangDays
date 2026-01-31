import React from "react";

const Navbar = () => {
  return (
    <div className="navbar z-50 text-white">
      <div className="navbar-start"></div>
      <div className="navbar-center mt-2">
        <a>
          <img
            src="/assets/long-langdays-logo-white.png"
            alt="logo"
            className="w-50 h-13 md:w-80"
          />
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
