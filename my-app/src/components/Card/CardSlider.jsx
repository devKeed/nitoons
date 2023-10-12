import React, { Component } from "react";
import Slider from "react-slick";

import "./Card.css";

import { cardItems } from "./CardItems";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1098,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings} >
          {cardItems.map((cardItem, id) => {
            return (
              <div>
                <section
                key={id}
                className="box-wrapper flexCenter innerwidth paddings"
              >
                <div
                  className="box-container paddings innerwidth"
                  style={{ border: `1px solid ${cardItem.color}` }}
                >
                  <div>
                    <div className="box-top flexColStart">
                      <div className="textSmallParagraph card-subTitle">
                        {cardItem.title}
                      </div>
                      <div className="textVerySmallParagraph box-description">
                        {cardItem.description}
                      </div>
                    </div>
                  </div>

                  <div className="box-bottom ">
                    <img className="card-image" src={cardItem.image} alt="" />

                    <div className="box-learn">
                      <a className="flexEnd" href="">
                        <div className="learn-more">Learn more</div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17L15 12L10 7"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
