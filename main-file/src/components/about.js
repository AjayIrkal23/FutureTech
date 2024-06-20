import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Video from "./section-components/video";
import AboutDetails from "./section-components/about-details";
import WorkProcess from "./section-components/work-process";
import FanFact from "./section-components/fun-fact-single-area";
import Client from "./section-components/client";
import Brand from "./section-components/brand";
import Subscriber from "./section-components/subscriber";
import Footer from "./global-components/footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="About-us" />
      <Video />
      <AboutDetails />
      <WorkProcess />
      <FanFact />
      <Footer />
    </div>
  );
};

export default About;
