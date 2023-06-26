import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/GSymbol.webp";
import style from "./SideBarNav.module.css";

const SidebarNav = ({ userName }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    location.reload();
  };

  const [profileOptionsOpen, setProfileOptionsOpen] = useState(false);

  const handleOpenProfileOptions = () => {
    setProfileOptionsOpen(!profileOptionsOpen);
  };

  return (
    <nav className="d-flex flex-column p-0 z-2 position-sticky min-vh-100 sticky-top">
      <div className="d-flex justify-content-center align-items-center mx-4">
        <img src={Logo} alt="Galvanize Inc logo" width={"48px"} />
        <div className="ms-1">
          <p className="m-0 fs-5">Galvanize</p>
          <p className="m-0 fs-5 text-secondary">Admissions</p>
        </div>
      </div>
      <ul className="list-unstyled pt-5 d-flex flex-column ">
        <li className="text-secondary pb-3 align-self-center">MAIN MENU</li>
        <li>
          <Link to="/dashboard" className="btn btn-light w-100 ">
            DASHBOARD
          </Link>
        </li>
      </ul>
      <div className="flex-grow-1 d-flex flex-column-reverse">
        {profileOptionsOpen ? (
          <div className="border">
            <div
              className="d-flex py-2"
              id={style["profile-container"]}
              onClick={handleOpenProfileOptions}
            >
              <div id="profile-icon" className="mx-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="#212b36"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="black"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M3,21 h18 C 21,12 3,12 3,21" />
                </svg>
              </div>
              <div className="flex-grow-1 px-2">{userName}</div>
              <div id="profile-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M7.41 8.59L6 10l6 6 6-6-1.41-1.41L12 14.17z" />
                </svg>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-light w-100 rounded-0"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              type="button"
              className="btn btn-light w-100 rounded-0"
              onClick={() => {
                navigate("/editprofile");
              }}
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div
            className="d-flex py-2 border"
            id={style["profile-container"]}
            onClick={handleOpenProfileOptions}
          >
            <div id="profile-icon" className="mx-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="#212b36"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="black"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M3,21 h18 C 21,12 3,12 3,21" />
              </svg>
            </div>
            <div className="flex-grow-1 px-2">{userName}</div>
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
        )}
      </div>
    </nav>
  );
};

export default SidebarNav;
