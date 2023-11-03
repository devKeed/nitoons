import React from "react";
import "./Header.css";
import { Navbar } from "flowbite-react";

export default function Header() {
  return (
    <section id="header" className="header-wrapper">
      <div className="flex justify-center items-center">
      <Navbar.Brand href="#header">
          <img
            className="logo-image mt-6"
            src="images\Nitoons logo.png"
            alt="logo"
          />
        </Navbar.Brand>
      </div>
      {/* <Navbar fluid rounded className="header-container bg-black">
        <Navbar.Brand href="#header">
          <img
            className="logo-image"
            src="images\Nitoons logo.png"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="header-menu">
          <ul>
            <li>
              <Navbar.Link href="#about-us">About Us</Navbar.Link>
            </li>
            <li>
              <Navbar.Link href="#">Projects</Navbar.Link>
            </li>
            <li>
              <Navbar.Link href="#visit-academy">Academy</Navbar.Link>
            </li>
            <li>
              <Navbar.Link href="#">Contact Us</Navbar.Link>
            </li>
          </ul>
        </Navbar.Collapse>

        <Navbar.Collapse className="header-socials">
          <div className="flexCenter">
            <Navbar.Link href="https://github.com/">
              <img src="images/mdi_github.png" alt="github" />
            </Navbar.Link>
            <Navbar.Link href="https://discord.com/">
              <img src="images/mdi_discord.png" alt="discord" />
            </Navbar.Link>
            <Navbar.Link href="https://www.reddit.com/">
              <img src="images/mdi_reddit.png" alt="reddit" />
            </Navbar.Link>
            <Navbar.Link href="https://twitter.com/">
              <img src="images/mdi_twitter.png" alt="twitter" />
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar> */}
    </section>
  );
}
