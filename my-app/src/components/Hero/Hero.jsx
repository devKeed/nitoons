import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper flexCenter background">
      <div className="flexCenter mx-auto max-w-screen-xl text-center py-24 lg:py-56 hero-container">
        <div className="hero-content">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl textTitle main-title">
            Where AI Meets
          </h1>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl textTitle text-title">
            Creative excellence
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 textParagraph">
            Using the scientific methods, Our goal is to re-imagine the way
            Animation, VFX, and cinematography are created by leveraging
            Artificial Intelligence. and deep learning models
          </p>

          <div className="hero-buttons topSpace flexCenter">
            <a href="">
              <button className="nitoonColorButton">
                <span className="textParagraph">Get started</span>
              </button>
            </a>

            <a href="#">
              <button className="nitoonWhiteButton">
                <span className="textParagraph">Learn more</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <img src="public\images\Looper BG 1.png"/>
      </div>
    </section>
  );
};

export default Hero;
