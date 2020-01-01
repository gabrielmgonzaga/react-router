import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <nav>
          <h1><Link to="/">Logo</Link></h1>
          <div className="hamburger">&#9776;</div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
      </nav>
    )
}