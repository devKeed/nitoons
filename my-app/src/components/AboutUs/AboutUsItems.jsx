import React from 'react'

export const AboutUsItems = ({item}) => {
  return (
    <section className="about-us-wrapper flexCenter margins">
      <div className="about-us-container ">
        <div className="about-us-left">
          <h1 className="textSubTitle about-us-title">
            {item.title}
          </h1>
          <p className="textSmallParagraph topSpace about-us-description">
            {item.description}
          </p>
          <div className="about-us-button">
            <button className="nitoonWhiteButton topSpace">Contact us</button>
          </div>

         
        </div>

        <div className="about-us-right">
          <div className="about-us-image flexCenter">
            <img
              src={item.image}
              alt="visit image"
              srcset=""
            />
          </div>
        </div>
      </div>
      
    </section>
  )
}


