import React from "react";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <nav className="p-4">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="../assets/GSymbol.webp"
          alt="Galvanizze Inc logo"
          width={"48px"}
        />
        <div className="ms-1">
          <p className="m-0 fs-5">Galvanize</p>
          <p className="m-0 fs-5 text-secondary">Admissions</p>
        </div>
      </div>
      <ul className="list-unstyled pt-5">
        <li className="text-secondary pb-3">MAIN MENU</li>
        <li>
          <Link to="/dashboard">DASHBOARD</Link>
        </li>
        <li>
          <Link to="/interview">INTERVIEW</Link>
        </li>
        <li>
          <Link to="/editprofile">EDIT PROFILE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
