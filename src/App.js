import React, { useState } from "react";
import Background from "./component/background/background";
import Navbar from "./component/navbar/navbar";
import Hero from "./component/hero/hero";


export const App = () => {
  const heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passion" },
  ];
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
    <Background playStatus={playStatus} heroCount={heroCount} />,
    <Navbar/>
    <Hero 
     setPlayStatus ={setPlayStatus}
     heroData ={heroData[heroCount]}
     heroCount = {heroCount}
     setHeroCount = {setHeroCount}
     playStatus = {playStatus}
    />
    </div>
  );
};

export default App;
