import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";

import Brand from "./section-components/brand";
import Subscriber from "./section-components/subscriber";
import Footer from "./global-components/footer";
import Page_header from "./global-components/page-header";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";

const Register = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <PageHeader headertitle="Welcome Back User !" login={true} />
      <RegisterComponent />
      <Footer />
    </div>
  );
};

export default Register;
