import React, { Component } from "react";
import { Link } from "react-router-dom";
import footerdata from "../../data/footerdata.json";

class Footer_v1 extends Component {
  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "Footer logo";
    let customclass = this.props.customclass ? this.props.customclass : "";

    return (
      <footer className={"footer-area " + customclass}>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="footer-widget widget widget-about-us">
                  <Link to="/" className="footer-logo">
                    <h4 className="text-white">Future Tech</h4>
                  </Link>
                  <p>{footerdata.footertext}</p>
                  <ul className="footer-social social-area-2">
                    {footerdata.socialicon.map((item, i) => (
                      <li key={i}>
                        <Link to={item.url}>
                          <i className={item.icon} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-4">
                <div className="footer-widget widget widget_nav_menu invest-go-top">
                  <h4 className="widget-title">
                    {footerdata.linkmenu.title} <span className="dot">.</span>
                  </h4>
                  <ul>
                    {footerdata.linkmenu.links.map((item, i) => (
                      <li key={i}>
                        <Link to={item.url}>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          />
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget widget widget_nav_menu invest-go-top">
                  <h4 className="widget-title">
                    {footerdata.aboutus.title} <span className="dot">.</span>
                  </h4>
                  <ul>
                    {footerdata.linkmenu.links.map((item, i) => (
                      <li key={i}>
                        <Link to={item.url}>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          />
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget widget contact-widget">
                  <h4 className="widget-title">
                    {footerdata.contactus.title} <span className="dot">.</span>
                  </h4>
                  <p>{footerdata.contactus.address}</p>
                  <p>{footerdata.contactus.email}</p>
                  <p>{footerdata.contactus.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-lg-left text-center">
                <ul className="footer-menu">
                  {footerdata.quicklink.links.map((item, i) => (
                    <li key={i}>
                      <Link to={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-5 text-center text-lg-right">
                <p className="copyright">Future Tech 2024</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer_v1;
