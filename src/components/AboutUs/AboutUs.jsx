import React, { useState } from "react";
import "./AboutUs.css";
import { AboutUsItems } from "./AboutUsItems";

export const AboutUs = () => {
  const [activeAboutUs, setActiveAboutUs] = useState(0);

  const items = [
    {
      id: 1,
      title:
        "We're delving into the exciting world of AI-enhanced visual research",
      description:
        "We live in an era where Artificial Intelligence is revolutionizing industries, and animation is no exception. At Nitoons, we leverage the latest advancements in Artificial Intelligence and Deep leaning technologies to create animations that are not only visually stunning but also deeply engaging.",
      image: "./public/images/Group 204.png",
    },
    {
      id: 2,
      title:
        "We're delving into the exciting world of AI-enhanced visual research",
      description:
        "We live in an era where Artificial Intelligence is revolutionizing industries, and animation is no exception. At Nitoons, we leverage the latest advancements in Artificial Intelligence and Deep leaning technologies to create animations that are not only visually stunning but also deeply engaging.",
      image: "./public/images/Group 204.png",
    },
    {
      id: 3,
      title:
        "We're delving into the exciting world of AI-enhanced visual research",
      description:
        "We live in an era where Artificial Intelligence is revolutionizing industries, and animation is no exception. At Nitoons, we leverage the latest advancements in Artificial Intelligence and Deep leaning technologies to create animations that are not only visually stunning but also deeply engaging.",
      image: "./public/images/Group 204.png",
    },
  ];

  const updateAboutUs = (newAboutUs) => {
    if (newAboutUs < 0) {
      newAboutUs = 0;
    } else if (newAboutUs >= items.length) {
      newAboutUs = items.length - 1;
    }

    setActiveAboutUs(newAboutUs);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate:(-${activeAboutUs * 100})` }}
        >
          {items.map((item) => {
            return <AboutUsItems item={item} />;
          })}
        </div>
      </div>

      <div className="arrows-container">
        <div className="arrows">
          <img
            onClick={() => {
              updateAboutUs(activeAboutUs - 1);
            }}
            className="arrow-left"
            src="public\images\circle heroicons-solid_arrow-left.png"
            alt="arrow-right"
          />
          <img
            onClick={() => {
              updateAboutUs(activeAboutUs + 1);
            }}
            className="arrow-right"
            src="public\images\circle heroicons-solid_arrow-left (1).png"
            alt="arrow-left"
          />
        </div>
      </div>
    </div>
  );
};
