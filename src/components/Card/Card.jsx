import React from "react";
import "./Card.css";
import { motion } from "framer-motion";

import CardSlider from "./Cardslider";

const Card = () => {

  
  return (
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
          Research and development constitute the cornerstone of our endeavours.
        </motion.div>
      </div>
      <CardSlider />
    </section>
  );
};

export default Card;
