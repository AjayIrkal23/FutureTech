import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class WhyChooseUs extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.whychooseus;
    let price = sectiondata.price;

    return (
      <div
        className="shape-2"
        style={{
          backgroundImage: "url(" + publicUrl + "assets/img/shape/2.png)"
        }}
      >
        {/* why-choose-us-area start */}
        <div className="why-choose-us-area pd-bottom-85">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="thumb item-bounce d-none d-lg-block">
                  <img src={publicUrl + data.img} alt={imagealt} />
                </div>
              </div>
              <div className="col-lg-7">
                {data.items.map((item, i) => (
                  <div key={i} className="single-facility media">
                    <span className="number">{item.number}</span>
                    <div className="thumb align-self-center">
                      <img src={publicUrl + item.icon} alt={imagealt} />
                    </div>
                    <div className="facility-details media-body">
                      <h5>{item.title}</h5>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* why-choose-us-area end */}
        {/* pricing-area start */}
        <div className="pricing-area pd-bottom-85">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-12">
                <div className="section-title text-lg-left text-center">
                  <h5 className="subtitle">
                    <span />
                    {price.subtitle}
                  </h5>
                  <h3 className="title">{price.title}</h3>
                  <div className="row">
                    <div className="col-lg-8">
                      <p className="mb-0">{price.content}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="pricing-tab">
                  <nav>
                    <div className="nav nav-tabs text-center" id="nav-tab">
                      <a
                        className="btn ml-0 nav-item nav-link active"
                        id="nav-monthly-tab"
                        data-toggle="tab"
                        href="#nav-monthly"
                      >
                        Monthly
                      </a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-monthly">
                      <div className="row justify-content-center">
                        {price.items.map((item, i) => (
                          <div key={i} className="col-lg-4 col-md-6">
                            <div className="single-pricing-wrap text-center invest-go-top">
                              <span className="animate-dots" />
                              <div className="price">{item.price}</div>
                              <div className="thumb">
                                <img
                                  src={publicUrl + item.icon}
                                  alt={imagealt}
                                />
                              </div>
                              <h5>{item.title}</h5>
                              <ul>
                                {item.features.map((item, i) => (
                                  <li key={i}>
                                    <Link to="#">{item}</Link>
                                  </li>
                                ))}
                              </ul>
                              <Link className="btn btn-plus" to="/investment">
                                <i className="fa fa-plus" />
                              </Link>
                              <Link className="btn btn-white" to="/investment">
                                Invest Now
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-yearly">
                      <div className="row justify-content-center">
                        {price.items.map((item, i) => (
                          <div key={i} className="col-lg-4 col-md-6">
                            <div className="single-pricing-wrap text-center invest-go-top">
                              <span className="animate-dots" />
                              <div className="price">{item.price}</div>
                              <div className="thumb">
                                <img
                                  src={publicUrl + item.icon}
                                  alt={imagealt}
                                />
                              </div>
                              <h5>{item.title}</h5>
                              <ul>
                                {item.features.map((item, i) => (
                                  <li key={i}>
                                    <Link to="/investment">{item}</Link>
                                  </li>
                                ))}
                              </ul>
                              <Link className="btn btn-plus" to="/investment">
                                <i className="fa fa-plus" />
                              </Link>
                              <Link className="btn btn-white" to="/investment">
                                Buy Now
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pricing-area end */}
      </div>
    );
  }
}

export default WhyChooseUs;
