import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import TextSection from "./components/TextSection";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {landingPageData.Academic ?
        landingPageData.Academic.map(data => (
        <>
          <TextSection title={data.title} paragraph={data.paragraph} id={data.id} /> 
        </>)) 
        : "Loading..."
      }
      <About data={landingPageData.About} link="https://www.youtube.com/embed/N9Acz7egQyA" />
      <Gallery data={landingPageData.Gallery} />
      <Team data={landingPageData.Team} />
    </div>
  );
};

export default App;
