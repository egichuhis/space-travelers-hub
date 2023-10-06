import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import './NavBar.css';
import LogoImg from '../../imgs/planet.png';

const NavBar = () => (
  <>
    <nav className="navbar navbar-expand-md bg-body py-3 shadow">

      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span
            className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"
          >
            <img
              src={LogoImg}
              alt="logo"
              className="img-fluid img-size-50"
            />

          </span>
          <span className="ms-2">Space Travelers Hub</span>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-2"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navcol-2" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                className="nav-link"
                to="/"
              >
                Rockets
              </NavLink>
            </li>
            <li className="nav-item border-end pe-2">
              <NavLink
                activeclassname="active"
                className="nav-link"
                to="/Missions"
              >
                Missions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                className="nav-link"
                to="/Profile"
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
  </>
);

export default NavBar;
