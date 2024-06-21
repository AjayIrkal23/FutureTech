import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { baseUrl } from "../context/Auth";

function RegisterComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    if (data.password.length > 6) {
      try {
        const response = await axios
          .post(`${baseUrl}user/register`, {
            username: data.username,
            email: data.email.toLowerCase(),
            nakedpassword: data.password,
            phoneNumber: data.phoneNumber,
            fullName: data.fullName
          })
          .then((status) => {
            toast.success("Registration successful. Please login.");
            history.push("/login");
          })
          .catch((status) => {
            if (status.response.data.Status === "Duplicate") {
              toast.error("User Exists. Please login.");
              history.push("/login");
            } else {
              toast.error(status.response.data.Status);
            }
          });
      } catch (error) {
        console.error("An error occurred during registration: ", error);
      }
    } else {
      toast.error("Weak Password");
    }
  };

  return (
    <div className="container_2 ">
      <div className="section-title text-lg-left text-center">
        <h3 className="title">Create a New Account</h3>
      </div>
      <div className="flex">
        <div
          className="professional-thumb thumb item-bounce"
          style={{ maxHeight: "400px", maxWidth: "500px", flex: 0.5 }}
        >
          <img src="/assets/img/icon/draw2.webp" className="" alt="" />
        </div>
        <div style={{ flex: 0.4 }}>
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-success text-center">
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
                    placeholder="Username"
                    {...register("username", { required: true })}
                  />
                </div>
                {errors.username && (
                  <span className="text-danger">Username is required</span>
                )}

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && (
                  <span className="text-danger">Email is required</span>
                )}

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-phone"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    {...register("phoneNumber", { required: true })}
                  />
                </div>
                {errors.phoneNumber && (
                  <span className="text-danger">Phone number is required</span>
                )}

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    {...register("fullName", { required: true })}
                  />
                </div>
                {errors.fullName && (
                  <span className="text-danger">Full name is required</span>
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

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match"
                    })}
                  />
                </div>
                {errors.confirmPassword && (
                  <span className="text-danger">
                    {errors.confirmPassword.message}
                  </span>
                )}

                <button type="submit" className="btn btn-primary btn-block">
                  REGISTER
                </button>
                <div className="message">
                  <div style={{ color: "white" }}>
                    <input type="checkbox" /> Remember Me
                  </div>
                  <div>
                    <Link
                      to="/login"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
