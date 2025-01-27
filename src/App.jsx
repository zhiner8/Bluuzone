import HeroSection from "./components/HeroSection";

import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "BluuZone"; // Set the tab name dynamically
  }, []);
  return (
    <>
      <HeroSection />
    </>
  );
};

export default App;
