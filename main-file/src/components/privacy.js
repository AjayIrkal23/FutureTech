import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import PrivacySection from "./section-components/privacy";
import Brand from "./section-components/brand";
import Subscriber from "./section-components/subscriber";
import Footer from "./global-components/footer";

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Privacy" />
      <PrivacySection />

      <Footer />
    </div>
  );
};

export default Privacy;
