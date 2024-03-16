import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FirstSection from "./first-section/FirstSection";
import BrandNewCarSection from "./new-car/BrandNewCarSection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <FirstSection />
      <BrandNewCarSection />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
