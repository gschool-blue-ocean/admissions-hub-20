import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/GSymbol.webp";
import style from "./SideBarNav.module.css";

const SidebarNav = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
  };

  return (
    <nav className="d-flex flex-column p-0">
      <div className="d-flex justify-content-center align-items-center mx-4">
        <img src={Logo} alt="Galvanize Inc logo" width={"48px"} />
        <div className="ms-1">
          <p className="m-0 fs-5">Galvanize</p>
          <p className="m-0 fs-5 text-secondary">Admissions</p>
        </div>
      </div>
      <ul className="list-unstyled pt-5 mx-4">
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
        <li>
          <Link to="/login" onClick={handleLogout}>
            LOGOUT
          </Link>
        </li>
      </ul>
      <div className="flex-grow-1 d-flex flex-column-reverse">
        <div className="d-flex py-2 border" id={style["profile-container"]}>
          <div id="profile-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="#212b36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="black"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M3,21 h18 C 21,12 3,12 3,21" />
            </svg>
          </div>
          <div className="flex-grow-1 px-2">name</div>
          <div id="profile-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
