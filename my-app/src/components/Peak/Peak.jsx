import React from "react";
import "./Peak.css";

const Peak = () => {
  return (
    <section className="peak-wrapper flex items-center">
     

     <div className="visit-academy-container margins ">
        

        <div className="visit-academy-right ">
          <div className="image-container flexCenter">
          <video autoPlay loop muted width="100%" height="auto">
            <source src="images\1103 (1).mp4"/>
        </video>
          </div>
        </div>

        <div className="visit-academy-left">
          <div className="visit-academy-title">
              <h1 className="textSubTitle">
              Scriptwriter
              </h1>
          </div>
          <p className="textSmallParagraph topSpace">
          With scriptwriiter, you have a forever companion as you develop your novel, game, and movie script
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default Peak;
