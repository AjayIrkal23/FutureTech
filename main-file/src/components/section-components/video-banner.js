import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class VideoBanner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="banner-area banner-video">
        <div className="container-fluid">
          <div className="row">
            <div className="banner-video-area">
              <video autoPlay muted loop id="myVideo">
                <source
                  src={publicUrl + "assets/video/investment.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            {/*// Banner Video End*/}
            <div className="slider-content-area">
              <div className="slider-content">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <h2>The Most Reputable Source Of Investment.</h2>
                      <h4 className="offer-text">
                        Let’s explore the amazing offers
                      </h4>
                      <p className="text">
                        Future Tech is a financial investment company where you
                        can be the part of its investment community worldwide.
                      </p>
                      <div className="btn-wrapper animated fadeInUpBig text-left">
                        <Link to="/login" className="btn btn-basic">
                          Start Investing
                        </Link>
                        <a
                          href="https://www.youtube.com/watch?v=d0XKtUXgpOw"
                          className="video-popup mfp-iframe play-icon-pulse"
                        >
                          <i className="fa fa-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Scroll Down*/}
            <div className="scroll-down-area">
              <div className="scroll-bottom">
                <a href="#service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoBanner;
