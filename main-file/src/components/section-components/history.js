import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class History extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.history;

    return (
      <div className="history-area pd-bottom-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title text-lg-left text-center">
                <h5 className="subtitle">
                  <span />
                  {data.subtitle}
                </h5>
                <h3 className="title">{data.title}</h3>
                <p>{data.content}</p>
              </div>
              <div className="row">
                {data.items.map((item, i) => (
                  <div key={i} className="col-sm-4">
                    <div className="single-history-wrap text-center text-lg-left">
                      <h1 className="counter">{item.number}</h1>
                      <p>{item.title} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 d-lg-block d-none align-self-center">
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

export default History;
