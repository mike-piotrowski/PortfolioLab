import React, { useState, useEffect } from "react";

import HomeHeader from "./HomeHeader";
import ThreeColumns from "./HomeThreeColumns";
import Steps from "./Steps";
import About from "./About";
import Help from "./Help";
import Contact from "./Contact";

const Home = () => {
  const [logged, setLogged] = useState(1);
  const handleOnClick = () => {
    setLogged(logged + 1);
  };

  useEffect(() => {
    console.log("dupa");
  }, [logged]);
  return (
    <>
      <HomeHeader />
      <ThreeColumns />
      <Steps />
      <About />
      <Help />
      <Contact />
    </>
  );
};

export default Home;
