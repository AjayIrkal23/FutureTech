import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class Investor extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.team;

    return (
      <div className="team-area-2 common-pd-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title text-lg-left text-center">
                <h5 className="subtitle">
                  <span />
                  {data.subtitle}
                </h5>
                <h3 className="title">{data.title}</h3>
                <p>{data.content}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.items.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="single-team-wrap text-center">
                  <div className="thumb">
                    <img
                      src={publicUrl + item.img}
                      height={250}
                      alt={imagealt}
                    />
                  </div>
                  <div className="team-details">
                    <h6>{item.name}</h6>
                    <h6>{item.designation}</h6>
                    <ul className="social-area">
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Investor;
