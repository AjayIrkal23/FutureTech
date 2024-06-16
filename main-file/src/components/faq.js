import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Faqsection from "./section-components/faq";
import Brand from "./section-components/brand";
import Subscriber from "./section-components/subscriber";
import Footer from "./global-components/footer";

const Faq = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Faq" />
      <Faqsection />

      <Footer />
    </div>
  );
};

export default Faq;
