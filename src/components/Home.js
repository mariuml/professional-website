import React from "react";
import HeroImage from "../assets/hero-img.jpg"

// CSS
import "./Home.css"

// Home component rendering profile photo and buttons to the screen
function Home() {
  return (
    <div>
      {/* Profile photo */}
      <img src={HeroImage} alt="profile photo of website creator" id="HeroImage" />
      <h1 id="HeroHeadline"> Hello. My name is Marium. </h1>
      {/* Create separate component here using code from the 
      following codepen:https://codepen.io/Coding_Journey/pen/BEMgbX */}
      <p id="HeroSubheading"> I am a </p>
    </div>
  );
}

export default Home;
