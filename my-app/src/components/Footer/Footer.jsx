import React from "react";
import "./Footer.css";

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <section className="footer-wrapper flexCenter">
      <div className="footer-container paddings innerwidth">
        <div className="footer-left">
          <img src="images\Nitoons purple 1.png" alt="logo" />
          <div className=" topSpace">
            <p className="footer-note">
            Join on on this illuminating journey
            </p>
            <p className="topSpace">
              copyright {currentYear} @nitoons. All Rights Reserved
            </p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-socials ">
            <a href="">
              <img src="images/Link.png" className="footer-image" alt="facebook" />
            </a>
            <a href="">
              <img src="images\Link-1.png" className="footer-image" alt="linkedin" />
            </a>
            <a href="">
              <img src="images\Link-2.png" className="footer-image" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
