import React from "react";
import "./Missions.css";

import { Carousel } from "flowbite-react";

export default function Missions() {
  return (
    <section id="missions" className="flexCenter">
      <Carousel pauseOnHover slideInterval={2000}>
        <div className="missions flex h-full items-center justify-center relative">
          <section className="about-us-wrapper flexCenter margins">
            <div className="about-us-container">
              <div className="about-us-right">
                <div className="about-us-image flexCenter">
                  <video autoPlay loop muted width="100%" height="auto">
                    <source src="./videos/gather.mov" />
                  </video>
                </div>
              </div>

              <div className="about-us-left paddings">
                <h1 className="textSubTitle about-us-title">
                  AI enhanced visual research.
                </h1>
                <p className="textSmallParagraph topSpace about-us-description">
                  We live in an era where Artificial Intelligence is
                  revolutionizing industries, and animation is no exception. At
                  Nitoons, we leverage the latest advancements in Artificial
                  Intelligence and Deep leaning technologies to create
                  animations that are not only visually stunning but also deeply
                  engaging.
                </p>
                <div className="about-us-button">
                  <button className="nitoonColorButton topSpace">
                    <a
                      href="mailto:support@pledre.com?subject=Your%20Subject%20Here"
                      className="textParagraph"
                    >
                      Contact us
                    </a>
                    <img src="images\heroicons-solid_arrow-left.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex h-full items-center justify-center relative">
          <section className="about-us-wrapper flexCenter margins">
            <div className="about-us-container">
              <div className="about-us-right">
                <div className="about-us-image flexCenter">
                  <video autoPlay loop muted width="100%" height="auto">
                    <source src="./videos/1103.mov" />
                  </video>
                </div>
              </div>

              <div className="about-us-left paddings">
                <h1 className="textSubTitle about-us-title">Imagine Beyond</h1>
                <p className="textSmallParagraph topSpace about-us-description">
                  Our goal is to give creatives and animators ai enabled
                  products so that they can bring their dreams to life.
                </p>
                <div className="about-us-button">
                  <button className="nitoonColorButton topSpace">
                    <a
                      href="mailto:support@pledre.com?subject=Your%20Subject%20Here"
                      className="textParagraph"
                    >
                      Contact us
                    </a>
                    <img src="images\heroicons-solid_arrow-left.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex h-full items-center justify-center relative">
          <section className="about-us-wrapper flexCenter margins">
            <div className="about-us-container">
              <div className="about-us-right">
                <div className="about-us-image flexCenter">
                  <video autoPlay loop muted width="100%" height="auto">
                    <source src="./videos/bike.mov" />
                  </video>
                </div>
              </div>

              <div className="about-us-left paddings">
                <h1 className="textSubTitle about-us-title">
                  Crafting Stories with Data
                </h1>
                <p className="textSmallParagraph topSpace about-us-description">
                  At Nitoons, we believe inside it, waiting to come to life. We
                  mix the skills of understanding data with the fun of making
                  cartoons to create stories that really connect with you.
                </p>
                <div className="about-us-button">
                  <button className="nitoonColorButton topSpace">
                    <a
                      href="mailto:support@pledre.com?subject=Your%20Subject%20Here"
                      className="textParagraph"
                    >
                      Contact us
                    </a>
                    <img src="images\heroicons-solid_arrow-left.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Carousel>
    </section>
  );
}
