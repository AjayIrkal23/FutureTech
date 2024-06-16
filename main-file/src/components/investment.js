import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Pricing from "./section-components/pricing";
import Transaction from "./section-components/transaction";
import Profit from "./section-components/profit";
import Footer from "./global-components/footer";

const Investment = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Investment Plan" />
      <Pricing />

      <Profit />
      <Footer customclass="mg-top-120" />
    </div>
  );
};

export default Investment;
