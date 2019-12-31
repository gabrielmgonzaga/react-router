import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <nav>
          <h1>Logo</h1>
          <div className="hamburger">&#9776;</div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    )
}