import React from "react";
import "./Card.css";
import { motion } from "framer-motion";

import CardSlider from "./Cardslider";

const Card = () => {

  
  return (
    <div className="card-section">
      <section className="card-wrapper margins paddings">
      <div className="card-container flexCenter margins">

        
        <motion.div
          initial={{ y: "-2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}

          transition={{
            duration: 5,
            type: "spring",
          }}
          className="card-title textSubTitle"
        >
          Some of our products are
        </motion.div>
      </div>
      <CardSlider />
    </section>
    </div>
  );
};

export default Card;
