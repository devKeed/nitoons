import React from "react";
import "./Missions.css";
import "../../../public/output.css";

import { Carousel } from "flowbite-react";

export default function Missions() {
  return (
    <section id="about-us" className="flexCenter margins">
      <Carousel>
        <div className="flex h-full items-center justify-center relative">
          <section className="about-us-wrapper flexCenter margins">
            <div className="about-us-container">
              <div className="about-us-right">
                <div className="about-us-image flexCenter">
                  <img src="https://i.pinimg.com/736x/28/22/f5/2822f5e015a71e83a18f183293cfae83.jpg" alt="visit image" />
                </div>
              </div>

              <div className="about-us-left paddings">
                <h1 className="textSubTitle about-us-title">
                  We're delving into the exciting world of AI-enhanced visual
                  research.
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
                  <button className="nitoonWhiteButton topSpace">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex h-full items-center justify-center relative">
          <section className="about-us-wrapper flexCenter margins">
            <div className="about-us-container ">
              <div className="about-us-right paddings">
                <div className="about-us-image flexCenter">
                  <img src="https://i.pinimg.com/564x/de/55/26/de5526c987b5a124fc4fc4120bc30c99.jpg" />
                </div>
              </div>

              <div className="about-us-left paddings">
                <h1 className="textSubTitle about-us-title">
                  We're delving into the exciting world of AI-enhanced visual
                  research.
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
                  <button className="nitoonWhiteButton topSpace">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex h-full items-center justify-center relative">
          <section className="about-us-wrapper flexCenter margins">
            <div className="about-us-container ">
              <div className="about-us-right paddings">
                <div className="about-us-image flexCenter">
                  <img src="https://i.pinimg.com/564x/44/f6/3b/44f63b62e307fdca66c14e65724f37a4.jpg" />
                </div>
              </div>

              <div className="about-us-left paddings">
                <h1 className="textSubTitle about-us-title">
                  We're delving into the exciting world of AI-enhanced visual
                  research.
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
                  <button className="nitoonWhiteButton topSpace">
                    Contact us
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
