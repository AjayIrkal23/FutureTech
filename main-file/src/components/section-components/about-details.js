import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class AboutDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.banner;

    return (
      <div className="professionality-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center">
                <h5 className="subtitle">Our Details</h5>
                <h3 className="title">Best of Professionality</h3>
                <p>
                  At FutureTech, we pride ourselves on delivering exceptional
                  service and expertise. Our team of seasoned professionals is
                  dedicated to providing tailored financial solutions to meet
                  your unique needs. With a commitment to integrity and
                  excellence, we ensure that our clients receive the highest
                  level of professionalism in every interaction. Join us to
                  experience the best in investment management and financial
                  planning.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="professional-thumb">
                <img src={publicUrl + "assets/img/13.png"} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutDetails;
