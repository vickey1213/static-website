import React from "react";
import Navbar from "../sections/Navbar";
import Search from "../sections/Search";
import Data from "../sections/Data";
import Testimonials from "../sections/Testimonials";
import Faq from "../sections/Faq";
import Brands from "../sections/Brands";
import Footer from "../sections/Footer";
import Market from "../sections/Market";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Market />
      <Data />
      <Brands />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
