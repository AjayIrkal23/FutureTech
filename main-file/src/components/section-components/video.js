import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class Video extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.video;

    return (
      <div
        className="video-area-2 common-pd-bottom right-line-bg"
        style={{
          backgroundImage: "url(" + publicUrl + "assets/img/shape/pen-2.png)"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center invest-go-top">
              <div className="section-title">
                <h5 className="subtitle">
                  <span />
                  {data.subtitle}
                </h5>
                <h3 className="title">{data.title}</h3>
                <p>{data.content}</p>
              </div>
              <Link className="btn btn-basic top-right-radius-0" to={data.url}>
                Find Out More
              </Link>
              <a
                className="video-play-btn"
                href={data.videourl}
                data-effect="mfp-zoom-in"
              >
                <i className="fa fa-play" />
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-about text-center bg-gradient invest-go-top">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/process/01.png"}
                    alt={imagealt}
                  />
                </div>
                <h5>
                  <Link to="/investment">Trusted by Experts</Link>
                </h5>
                <p>
                  Our services are highly regarded by industry professionals,
                  ensuring you receive the best investment solutions tailored to
                  your needs.
                </p>
                <Link className="btn btn-plus" to="/investment">
                  <i className="fa fa-plus" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-about text-center bg-purple">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/process/02.png"}
                    alt="icon"
                  />
                </div>
                <h5>
                  <Link to="/investment">Saving &amp; Investments</Link>
                </h5>
                <p>
                  We offer tailored saving and investment solutions to help grow
                  your wealth securely and efficiently, ensuring optimal returns
                  and peace of mind.
                </p>
                <Link className="btn btn-plus" to="/investment">
                  <i className="fa fa-plus" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
