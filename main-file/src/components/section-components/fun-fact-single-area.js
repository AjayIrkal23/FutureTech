import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";
import Video from "./video";

class FunFact extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.banner;

    return (
      <div className="fact-count-area common-pd-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-fact-count text-center">
                <div className="thumb">
                  <img src={publicUrl + "assets/img/fact/01.png"} alt="icon" />
                </div>
                <h4 className="fact-title">Total Members</h4>
                <h2 className="counter">120</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-fact-count text-center">
                <div className="thumb">
                  <img src={publicUrl + "assets/img/fact/01.png"} alt="icon" />
                </div>
                <h4 className="fact-title">Total Deposited</h4>
                <h2 className="counter">101548</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-fact-count text-center">
                <div className="thumb">
                  <img src={publicUrl + "assets/img/fact/01.png"} alt="icon" />
                </div>
                <h4 className="fact-title">Total Profit</h4>
                <h2 className="counter">80000</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FunFact;
