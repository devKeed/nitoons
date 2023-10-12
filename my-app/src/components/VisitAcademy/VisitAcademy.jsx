import React from "react";
import "./VisitAcademy.css";

const VisitAcademy = () => {
  return (
    <section id="visit-academy" className="visit-academy-wrapper flexCenter">
      <div className="visit-academy-container margins">
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
              <a href="https://mock.pledre.school/" className="textParagraph">Visit our academy</a>
              <img src="public\images\heroicons-solid_arrow-left.png" alt="" />
            </button>
          </div>
        </div>

        <div className="visit-academy-right ">
          <div className="image-container flexCenter">
            <img
              src="https://i.pinimg.com/564x/57/90/ca/5790ca00b6c4dc6e8924d8b411c52295.jpg"
              height={539}
              alt="visit image"
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitAcademy;
