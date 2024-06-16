import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ContactInfoSection from "./section-components/contact-info";
import ContactForm from "./section-components/contact-form";
import Subscriber from "./section-components/subscriber";
import Footer from "./global-components/footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Contact-us" />
      <ContactInfoSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
