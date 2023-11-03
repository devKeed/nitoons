import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import VisitAcademy from "./components/VisitAcademy/VisitAcademy";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Missions from "./components/Missions/Missions";
import Peak from "./components/Peak/Peak";

function App() {
  return (
    <div>
      <div className="hero-view">
        <Header />
        <Hero />
      </div>
      <Missions />
      <Card />
      <Peak/>
      <VisitAcademy />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
