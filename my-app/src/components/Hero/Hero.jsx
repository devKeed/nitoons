import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <motion.div 
      initial={{ y: "-4rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        type: "spring",
      }}
      className="hero-container">
        <h1 className="textTitle main-title">Where AI Meets</h1>
        <h1 className="textTitle text-title">
          <Typewriter
            options={{
              strings: [
                "Creative excellence",
                "Artistic mastery",
                "Inventive genius",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p className="hero-description textParagraph topSpace ">
          Using the scientific methods, Our goal is to re-imagine the way
          Animation, VFX, and cinematography are created by leveraging
          Artificial Intelligence and deep learning models
        </p>

        <div className="hero-buttons flexCenter">
          <a href="#missions">
            <button className="nitoonColorButton">
              <span className="textParagraph">Get started</span>
            </button>
          </a>

          <a href="#missions">
            <button className="nitoonWhiteButton">
              <span className="textParagraph">Learn more</span>
            </button>
          </a>
        </div>
      </motion.div>
      <div className="hero-background-image flexCenter">
        <img src="images/background img.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
