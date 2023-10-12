import React from "react";
import "./Footer.css";

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <section className="footer-wrapper flexCenter">
      <div className="footer-container paddings innerwidth">
        <div className="footer-left">
          <img src="public\images\Nitoons purple 1.png" alt="logo" />
          <div className="footer-note textVerySmallParagraph topSpace">
            <p>
              Let us be your partner in visual research and animation, helping
              you turn data into visual stories that drive impact and value.
              Join us on this illuminating journey, where every animation we
              create is infused with the value of visual research.
            </p>
            <p className="topSpace">
              copyright {currentYear} @nitoons. All Rights Reserved
            </p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-socials ">
            <a href="">
              <img src="public\images/Link.png" alt="facebook" />
            </a>
            <a href="">
              <img src="public\images\Link-1.png" alt="linkedin" />
            </a>
            <a href="">
              <img src="public\images\Link-2.png" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
