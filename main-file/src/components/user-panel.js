import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import UserPanelPage from "./section-components/user-panel";
import Brand from "./section-components/brand";
import Subscriber from "./section-components/subscriber";
import Footer from "./global-components/footer";

const UserPanel = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="User Panel" />
      <UserPanelPage />
      <Footer />
    </div>
  );
};

export default UserPanel;
