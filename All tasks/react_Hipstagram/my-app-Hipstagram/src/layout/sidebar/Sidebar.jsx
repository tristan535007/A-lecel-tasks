import { React } from "react";
import { NavLink } from "react-router-dom";
import { CStatusBar } from "..";

import pathComp from "../../PathForRoute/pathObject";
let styles = { svg: { width: "45px", height: "25px" } };

export const Sidebar = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <CStatusBar />
      </li>
      <li className="list-group-item ">
        <NavLink to={pathComp.my_profile}>
          <svg
            style={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <span>My profile</span>
        </NavLink>
      </li>
      <li className="list-group-item ">
        <NavLink to={pathComp.newpost}>
          <svg
            style={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="orange"
          >
            <path d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"></path>
          </svg>
          <span>New Post</span>
        </NavLink>
      </li>

      <li className="list-group-item ">
        <NavLink to={pathComp.feed}>
          <svg
            style={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span>Feed</span>
        </NavLink>
      </li>

      <li className="list-group-item ">
        <NavLink to={pathComp.people}>
          <svg
            style={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg>
          <span>People</span>
        </NavLink>
      </li>
      {/* <li className="list-group-item ">
        <NavLink to={pathComp.photos}>
          <svg
            style={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="green"
          >
            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
          </svg>
          <span>Photos</span>
        </NavLink>
      </li>
      <li className="list-group-item ">
        <NavLink to={pathComp.events}>
          <svg
            style={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="pink"
          >
            <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
          </svg>
          <span>Events</span>
        </NavLink>
      </li> */}
    </ul>
  );
};
