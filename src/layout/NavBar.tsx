import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="navbar bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Notes</a>
            </li>
            <li>
              <a>Reminders</a>
            </li>
            <li>
              <a>Edit Labels</a>
            </li>
            <li>
              <a>Archives</a>
            </li>
            <li>
              <a>Bin</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img
          className="w-10 h-10"
          src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png"
          alt="logo"
        />
        <a className="btn btn-ghost normal-case text-xl">
          <u>Keep</u>
        </a>
      </div>
      <div className="navbar-end">
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered bg-gray-700 text-white font-semibold w-full max-w-xs"
          />
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-warning indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
