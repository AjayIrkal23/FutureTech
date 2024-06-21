import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class WorkProcess extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.banner;

    return (
      <div
        className="work-area about-work-shape common-pd-bottom-3 pd-top-120"
        style={{
          backgroundImage: "url(" + publicUrl + "assets/img/shape/6.png)"
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 invest-go-top">
              <div className="single-work text-center">
                <span className="common-icon-circle bg-smile-green">
                  <img src={publicUrl + "assets/img/icon/01.png"} alt="icon" />
                </span>
                <h4>
                  <Link to="/login">OPEN AN ACCOUNT</Link>
                </h4>
                <p>
                  Start your investment journey with us today. providing you
                  with access to tailored financial solutions and expert
                  guidance.
                </p>
                <Link className="btn btn-plus" to="/register">
                  <i className="fa fa-plus" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 col-md-6 invest-go-top">
                  <div className="single-work text-center">
                    <span className="common-icon-circle bg-pink">
                      <img
                        src={publicUrl + "assets/img/icon/02.png"}
                        alt="icon"
                      />
                    </span>
                    <h4>
                      <Link to="/login">Earn Interest</Link>
                    </h4>
                    <p>
                      Grow your savings with our competitive interest rates.
                      Invest with us and watch your money work for you.
                    </p>
                    <Link className="btn btn-plus" to="/register">
                      <i className="fa fa-plus" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 invest-go-top">
                  <div className="single-work text-center">
                    <span className="common-icon-circle bg-yellow">
                      <img
                        src={publicUrl + "assets/img/icon/04.png"}
                        alt="icon"
                      />
                    </span>
                    <h4>
                      <Link to="/login">Withdraw Your Earnings</Link>
                    </h4>
                    <p>
                      Access your funds easily whenever you need them. Enjoy
                      hassle-free withdrawals.
                    </p>
                    <Link className="btn btn-plus" to="/investment">
                      <i className="fa fa-plus" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkProcess;
