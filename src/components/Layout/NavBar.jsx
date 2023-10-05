import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './NavBar.css';
import LogoImg from '../../imgs/planet.png';

const NavBar = () => (
  <>
    <nav
      className="navbar navbar-expand-md bg-body py-3"
      style={{ paddingTop: 16, paddingBottom: 16, boxShadow: '1px 1px' }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span
            className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"
            style={{ background: 'white' }}
          >
            <img
              src={LogoImg}
              alt="logo"
              width={37}
              height={71}
              style={{ height: 50, width: 50 }}
            />
          </span>
          <span style={{ marginLeft: 10 }}>Space Travelers Hub</span>
        </a>
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
            <li
              className="nav-item"
              style={{ borderRightWidth: 1, borderRightStyle: 'solid' }}
            >
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
