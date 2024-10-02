import React, { useEffect } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons
import Brand from "../assets/img/score-logo.svg";
import Brandw from "../assets/img/score-logow.svg";
import Profilepic from "../assets/img/profile-pic.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!theme) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const navigate = useNavigate();
  const SignUp = () => {
    navigate("/SignUp");
  };

  let isLoggenIn = false;

  return (
    <div>
      <Navbar expand="lg" className="" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            {theme === "light" ? (
              <img src={Brand} alt="Search" />
            ) : (
              <img src={Brandw} alt="Search" />
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="">
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
            {isLoggenIn ? (
              <Button type="submit" onClick={SignUp}>
                Sign Up
              </Button>
            ) : (
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img src={Profilepic} alt="Profile pic" />
                    <p>
                      Join For Free
                      <span>Member</span>
                    </p>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/Myaccount">My Account</Dropdown.Item>
                    <Dropdown.Item href="/Roadmap">Flashcard</Dropdown.Item>
                    <Dropdown.Item href="/Reviewquestions">
                      Review Questions
                    </Dropdown.Item>
                    <Dropdown.Item href="/Reminder">Reminder</Dropdown.Item>
                    <Dropdown.Item href="/Plansandpricing">
                      Plans and Pricing
                    </Dropdown.Item>
                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
