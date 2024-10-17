import React, { useEffect, useState } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";
import Brand from "../assets/img/score-logo.svg";
import Brandw from "../assets/img/score-logow.svg";
import profilePicture from "../assets/img/profile-pic.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Retrieve token from local storage
    setIsLoggedIn(!!token); // Update login state based on token presence
    console.log("Retrieved token: ", token);
  }, []); // This will run only once on component mount

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from local storage
    setIsLoggedIn(false); // Update login state
    toast.success("you are logged out !!")
    navigate("/"); // Redirect to home or login page
  };

  const SignUp = () => {
    navigate("/SignUp");
  };

  return (
    <div>
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={theme === "light" ? Brand : Brandw} alt="Brand" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/Roadmap">Flashcards</Nav.Link>
              <Nav.Link href="/Subjects">Practice Test</Nav.Link>
              <Nav.Link href="/Subjects">Readiness Test</Nav.Link>
              <Nav.Link href="/Statisticss">Statistics</Nav.Link>
              <div className="d-flex align-items-center me-3">
                <label className="theme-toggle-switch">
                  <input
                    type="checkbox"
                    checked={theme === "light"}
                    onChange={toggleTheme}
                  />
                  <span className="slider">
                    <FaSun className="icon sun" />
                    <FaMoon className="icon moon" />
                  </span>
                </label>
              </div>
            </Nav>
            {isLoggedIn ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img src={profilePicture} alt="Profile pic" />
                  <p>
                    Welcome Back!
                    <span>Member</span>
                  </p>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/Myaccount">My Account</Dropdown.Item>
                  <Dropdown.Item href="/Roadmap">Flashcard</Dropdown.Item>
                  <Dropdown.Item href="/Reviewprtest">Review Questions</Dropdown.Item>
                  <Dropdown.Item href="/Reminder">Reminder</Dropdown.Item>
                  <Dropdown.Item href="/Plansandpricing">Plans and Pricing</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button type="submit" onClick={SignUp}>
                Sign Up
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
