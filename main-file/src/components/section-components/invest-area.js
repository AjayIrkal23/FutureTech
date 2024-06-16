import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class InvestArea extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.investarea;

    return (
      <div
        className="featured-area left-line-bg common-pd-bottom-3"
        style={{
          backgroundImage: "url(" + publicUrl + "assets/img/shape/pen.png)"
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-lg-left text-center">
              <div className="section-title">
                <h5 className="subtitle">
                  <span />
                  {data.subtitle}
                </h5>
                <h3 className="title">{data.title}</h3>
                <p>{data.content}</p>
              </div>
              {/* <div className="single-input-wrap">
                   <form method="GET">
	                  <input name="email" placeholder="Inter your email address" type="text" className="single-input" />
	                  <input type="submit" className="btn btn-basic" value="Start Invest" />
                  </form>
                </div> */}
            </div>
            <div className="col-lg-5 col-6 align-self-center banner-thumb-wrap">
              <div className="thumb item-bounce">
                <img src={publicUrl + data.img} alt={imagealt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InvestArea;
