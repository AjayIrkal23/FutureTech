import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class Privacy extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.banner;

    return (
      <div className="privacy-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="privacy-image">
                  <img
                    src={publicUrl + "assets/img/privacy.png"}
                    alt="privacy image"
                  />
                </div>
                <span className="sub-title">Welcome to</span>
                <h2 className="title" style={{ marginBottom: "20px" }}>
                  Our Privacy Policy
                </h2>

                <p className="privacy-text" style={{ textAlign: "center" }}>
                  Your privacy is important to us. This Privacy Policy outlines
                  how we handle your personal information to protect your
                  privacy.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="personalization">
                <div className="privacy-header">
                  <h3>Information Collection</h3>
                </div>
                <div className="part-text">
                  <h5>Personal Information</h5>
                  <p>
                    We collect personal information such as your name, email
                    address, and contact details when you register on our site,
                    subscribe to our newsletter, or fill out a form.
                  </p>
                </div>
                <div className="part-text">
                  <h5>Financial Information</h5>
                  <p>
                    We may collect financial information, such as bank account
                    or credit card numbers, for processing transactions related
                    to your SIP investments.
                  </p>
                </div>
                <div className="part-text">
                  <h5>Usage Data</h5>
                  <p>
                    We also collect information on how our service is accessed
                    and used. This data may include information such as your
                    computer's Internet Protocol address (IP address), browser
                    type, browser version, the pages of our service that you
                    visit, the time and date of your visit, and other diagnostic
                    data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="data">
                <div className="privacy-header">
                  <h3>Use of Information</h3>
                </div>
                <div className="part-text">
                  <h5>To Provide and Maintain Service</h5>
                  <p>
                    We use the collected data to provide and maintain our
                    service, including monitoring the usage of our service.
                  </p>
                </div>
                <div className="part-text">
                  <h5>To Manage Your Account</h5>
                  <p>
                    We use your information to manage your account, including
                    processing your SIP investments and transactions.
                  </p>
                </div>
                <div className="part-text">
                  <h5>To Communicate with You</h5>
                  <p>
                    We may use your information to contact you with newsletters,
                    marketing or promotional materials, and other information
                    that may be of interest to you.
                  </p>
                </div>
                <div className="part-text">
                  <h5>To Protect Our Service</h5>
                  <p>
                    We may use your information to detect, prevent, and address
                    technical issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Privacy;
