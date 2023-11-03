import React from "react";
import "./VisitAcademy.css";

const VisitAcademy = () => {
  return (
    <section id="visit-academy" className="visit-academy-wrapper flexCenter ">
      <div className="visit-academy-container margins ">
        <div className="visit-academy-left">
          <div className="visit-academy-title">
              <h1 className="textSubTitle">
                Learn effective storytelling techniques
              </h1>
          </div>
          <p className="textSmallParagraph topSpace">
            Discover from experienced professionals in the field how to
            effectively convey your stories using both traditional and
            innovative methods.
          </p>
          <div>
            <button className="nitoonColorButton topSpace">
              <a href="https://mock.pledre.school/" className="textParagraph">
                Visit our academy
              </a>
              <img src="images\heroicons-solid_arrow-left.png" alt="" />
            </button>
          </div>
        </div>

        <div className="visit-academy-right ">
          <div className="image-container flexCenter">
            <video autoPlay loop muted width="100%" height="auto">
              <source src="./videos/gather.mov"/>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitAcademy;
