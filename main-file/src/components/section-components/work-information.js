import React, { useState } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";
import { toast } from "react-hot-toast";

const WorkInformation = () => {
  const publicUrl = process.env.PUBLIC_URL + "/";
  const imagealt = "image";
  const data = sectiondata.workprocessing;

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email.includes("@") && email.length > 2) {
      toast.success("Success !");
      setEmail("");
    } else {
      toast.error("Invalid Email Format");
    }
  };

  return (
    <div className="work-area common-pd-2 bg-none">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-work text-center mg-top-180 invest-go-top">
              <span className="common-icon-circle bg-smile-green">
                <img src={publicUrl + data.icon} alt="icon" />
              </span>
              <h4>
                <Link to={data.url}>{data.title}</Link>
              </h4>
              <p>
                You can open account entirely online, with no need for offline
                Visits... you can complete most tasks online — just login to
                your dashboard....
              </p>
              <Link className="btn btn-plus" to={data.url}>
                <i className="fa fa-plus" />
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              {data.items.map((item, i) => (
                <div key={i} className="col-lg-6 col-md-6">
                  <div className="single-work text-center invest-go-top">
                    <span className="common-icon-circle bg-pink">
                      <img src={publicUrl + item.icon} alt="icon" />
                    </span>
                    <h4>
                      <Link to={item.url}>{item.title}</Link>
                    </h4>
                    <p>{item.content}</p>
                    <Link className="btn btn-plus" to={item.url}>
                      <i className="fa fa-plus" />
                    </Link>
                  </div>
                </div>
              ))}

              <div className="col-lg-12 mb-5 mb-mg-0">
                <div className="single-input-wrap text-center text-lg-right">
                  <form method="GET">
                    <input
                      name="email"
                      placeholder="Inter your email address"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      type="text"
                      className="single-input"
                    />
                    <h1
                      className="btn btn-basic"
                      onClick={() => handleSubmit()}
                    >
                      GO ON
                    </h1>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInformation;
