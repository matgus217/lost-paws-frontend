//React
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
          <Container>
            <NavLink to="/">
              <Navbar.Brand>
                <img src={logo} alt="logo" height="70" />
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto text-left">
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/"
                >
                  <i className="fas fa-paw"></i>Home
                </NavLink>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/signin"
                >
                  <i className="fas fa-sign-in-alt"></i>Log In
                </NavLink>
                <NavLink
                  to="/signup"
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                >
                  <i className="fas fa-user-plus"></i>Create A Login
                </NavLink>

                <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            aria-label="Navigate to event create form"
            to="/events/create"
        >
              <i className="fas fa-cat"></i> Report A Lost Paw
        </NavLink>

               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    };

export default NavBar;