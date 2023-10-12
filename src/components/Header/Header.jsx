import React from "react";
import "./Header.css";

import { Navbar} from "flowbite-react";

export default function Header() {
  return (
    <section id="header" className="header-wrapper flexCenter">
      <Navbar fluid rounded className="header-container bg-black ">
      <Navbar.Brand href="#header">
        <div className="log-container" height={26.414}>
          <img src="public\images\Nitoons purple 1.png" alt="logo" />
        </div>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Navbar.Collapse className="textParagraph">
          <Navbar.Link href="#about-us" className="text-white hover:text-gray hover:bg header-menu">About Us</Navbar.Link>
          <Navbar.Link href="#" className="text-white hover:text-gray header-menu">Projects</Navbar.Link>
          <Navbar.Link href="#visit-academy" className="text-white hover:text-gray header-menu">Academy</Navbar.Link>
          <Navbar.Link href="#" className="text-white hover:text-gray header-menu">Contact Us</Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="header-socials ">
        <Navbar.Link href="https://github.com/"><img src="public\images\mdi_github.png" alt="github"/></Navbar.Link>
        <Navbar.Link href="https://discord.com/"><img src="public\images\mdi_discord.png" alt="discord"/></Navbar.Link>
        <Navbar.Link href="https://www.reddit.com/"><img src="public\images\mdi_reddit.png" alt="reddit" /></Navbar.Link>
        <Navbar.Link href="https://twitter.com/"><img src="public\images\mdi_twitter.png" alt="twitter" /></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </section>
  );
}
