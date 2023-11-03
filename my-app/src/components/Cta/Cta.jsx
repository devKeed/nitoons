import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta-wrapper flexCenter">
      <div className="cta-container flexColCenter">
        <h1 className="textSubTitle cta-title">
          Join us on our exploration of boundless visual possibilities
        </h1>
        <div className="cta-buttons">
          <button className="nitoonBlackButton textParagraph">
            Learn more{" "}
            <svg
              className=" arrow-point w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <button className="nitoonWhiteButton textParagraph">Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
