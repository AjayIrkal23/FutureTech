import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarV2 extends Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".topbar-select").length) {
      $(".topbar-select ").niceSelect();
    }
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <div className="navbar-area navbar-area-1">
        <div className="navbar-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 text-sm-left text-center">
                <ul className="topbar-left"></ul>
              </div>
              <div className="col-sm-5 text-sm-right text-center">
                <ul className="topbar-right float-md-right">
                  <li className="topbar-single-info">
                    <span className="d-none d-lg-inline-block">
                      <Link to="/investment">Invest Offer</Link>
                    </span>
                  </li>
                  <li className="topbar-single-info topbar-social-icon">
                    <a href="#">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="topbar-single-info topbar-social-icon">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="topbar-single-info topbar-social-icon">
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="topbar-single-info topbar-social-icon">
                    <a href="#">
                      <i className="fa fa-instagram mr-0" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-area navbar-expand-lg nav-style-01">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-toggle="collapse"
                data-target="#investon_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link to="/">
                {" "}
                <h4 className="text-white">Future Tech</h4>
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="investon_main_menu">
              <ul className="navbar-nav menu-open">
                <li className="menu-item-has-children current-menu-item">
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">
                        <i className="fa fa-long-arrow-right" />
                        Home 01
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-v2">
                        <i className="fa fa-long-arrow-right" />
                        Home 02
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-v3">
                        <i className="fa fa-long-arrow-right" />
                        Home 03
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-v4">
                        <i className="fa fa-long-arrow-right" />
                        Home Consult
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-v5">
                        <i className="fa fa-long-arrow-right" />
                        Home Video
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Investment</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/investment">
                        <i className="fa fa-long-arrow-right" />
                        Investment Plan
                      </Link>
                    </li>
                    <li>
                      <Link to="/investor">
                        <i className="fa fa-long-arrow-right" />
                        Investor
                      </Link>
                    </li>
                    <li>
                      <Link to="/user-panel">
                        <i className="fa fa-long-arrow-right" />
                        User Panel
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Case Studies</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/case">
                        <i className="fa fa-long-arrow-right" />
                        Case
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-details">
                        <i className="fa fa-long-arrow-right" />
                        Case Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/error-page">
                        <i className="fa fa-long-arrow-right" />
                        404
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                        <i className="fa fa-long-arrow-right" />
                        faq
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy">
                        <i className="fa fa-long-arrow-right" />
                        Privacy
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <ul className="right-part-search">
              <li className="search" id="search">
                <a href="#">
                  <i className="fa fa-search" />
                </a>
              </li>
              <li className="menubar d-none d-lg-block" id="navigation-button">
                <a>
                  <i className="flaticon-menu-button" />
                </a>
              </li>
            </ul>
            <div className="nav-right-part">
              <a href="#" className="btn btn-basic">
                See all plan
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarV2;
