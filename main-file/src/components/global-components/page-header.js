import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page_header extends Component {
  render() {
    let HeaderTitle = this.props.headertitle;
    let login = this.props.login;
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div
        className={`${
          !login ? "page-title-area mg-bottom-105" : "page-title-area_2"
        } mg-bottom-105`}
      >
        <div className="container">
          {!login && (
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h3 className="title">
                  Intelligent Plan <br />
                  <br />
                  For Your Investment{" "}
                </h3>
              </div>

              <div className="col-md-6 text-center align-self-center">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    {HeaderTitle}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Page_header;
