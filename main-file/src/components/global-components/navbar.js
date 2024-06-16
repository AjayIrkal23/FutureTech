import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/Auth"; // Adjust the path as necessary

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const history = useHistory();
  let publicUrl = process.env.PUBLIC_URL + "/";

  const location = useLocation();

  const isUserPanel = location.pathname === "/user-panel"; // Adjust the path as needed

  const handleLogout = () => {
    userLogout();
    history.push("/");
  };

  return (
    <div className="navbar-area navbar-area-2">
      <div className="navbar-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-sm-right text-center pt-2">
              <ul className="topbar-right float-md-right">
                <li className="topbar-single-info topbar-social-icon p">
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
      <nav className="navbar navbar-area navbar-expand-lg nav-transparent">
        <div className="container nav-container nav-white">
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
              <h4 className="text-black">Future Tech</h4>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="investon_main_menu">
            <ul className="navbar-nav menu-open">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/investment">Investment</Link>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Policies & Query</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/faq">
                      <i className="fa fa-long-arrow-right" />
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy">
                      <i className="fa fa-long-arrow-right" />
                      Privacy Policies
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {user ? (
                isUserPanel ? (
                  <li>
                    <p onClick={handleLogout} style={{ cursor: "pointer" }}>
                      Logout
                    </p>
                  </li>
                ) : (
                  <li>
                    <Link to="/user-panel">Dashboard</Link>
                  </li>
                )
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
