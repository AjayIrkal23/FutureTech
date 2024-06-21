import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext, baseUrl } from "../context/Auth";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { userLogin } = useContext(AuthContext);
  const history = useHistory();
  const onSubmit = async (data) => {
    if (data.password.length > 6) {
      await axios
        .post(`${baseUrl}user/login`, {
          email: data.username.toLowerCase(),
          nakedpassword: data.password
        })
        .then((resps) => {
          if (resps.data.Status === "Success") {
            const user = {
              email: resps.data.email,
              username: resps.data.name,
              token: resps.data.token
            };
            userLogin(user);
            history.push("/user-panel");
          }
        })
        .catch((errs) => {
          console.log(errs);
          if (errs.response.data.Status == "Wrong") {
            toast.error("Wrong Password Entered");
          } else if (errs.response.data.Status == "Not Found") {
            toast.error("User Does Not Exists");
          } else {
            toast.error("Something Went Wrong");
          }
        });
    } else {
      toast.error("Weak Password");
    }
  };

  return (
    <div className="container_2 ">
      <div className="section-title text-lg-left text-center">
        <h3 className="title"> Login Into Your Account</h3>
      </div>
      <div className="flex">
        <div style={{ flex: 0.4 }}>
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center">
                <i
                  className="fa fa-user-circle"
                  style={{ fontSize: "110px" }}
                ></i>
              </h4>
            </div>
            <div className="body-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    {...register("username", { required: true })}
                  />
                </div>
                {errors.username && (
                  <span className="text-danger">Username is required</span>
                )}

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                </div>
                {errors.password && (
                  <span className="text-danger">Password is required</span>
                )}

                <button type="submit" className="btn btn-success btn-block">
                  LOGIN
                </button>
                <div className="message">
                  <div style={{ color: "white" }}>
                    <input type="checkbox" /> Remember Me
                  </div>
                  <div>
                    <Link
                      to="/register"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="professional-thumb thumb item-bounce"
          style={{ maxHeight: "400px", maxWidth: "500px", flex: 0.5 }}
        >
          <img src="/assets/img/icon/bgLogin.svg" className="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
