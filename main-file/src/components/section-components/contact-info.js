import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class ContactInfo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.banner;

    return (
      <div>
        {/* contact area start */}
        <div className="contact-area pd-bottom-85">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h5 className="subtitle">Feel Free To Conatct Us</h5>
                  <h3 className="title">Contact Us</h3>
                  <p>
                    Feel free to reach out to us with any questions or concerns.
                    Our team is here to assist you. Simply contact us, and we'll
                    get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-contact text-center bottom-left-radius-0">
                  <div className="icon">
                    <img
                      src={publicUrl + "assets/img/icon/home.png"}
                      alt="icon"
                    />
                  </div>
                  <h5>Our Location</h5>
                  <p>Despandenagar near ashok nagar police station hubli..</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-contact text-center bottom-left-radius-0">
                  <div className="icon">
                    <img
                      src={publicUrl + "assets/img/icon/envelope.png"}
                      alt="icon"
                    />
                  </div>
                  <h5>E-mail</h5>
                  <p>katwevaibhav7@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-contact text-center bottom-left-radius-0">
                  <div className="icon">
                    <img
                      src={publicUrl + "assets/img/icon/phone.png"}
                      alt="icon"
                    />
                  </div>
                  <h5>Phone</h5>
                  <p>+91-7338506103</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact area end */}
        {/* contact-map area start */}
        <div className="main-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.4021284453675!2d75.13367877516703!3d15.354692885225976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d746f960cf61%3A0x91a1aa36c3883c73!2sDeshpande%20Nagar%20Police%20Station!5e0!3m2!1sen!2sin!4v1717404992903!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
        {/* contact-map area end */}
      </div>
    );
  }
}

export default ContactInfo;
