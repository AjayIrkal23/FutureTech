import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Modal,
  Paper,
  Typography,
  Avatar as Avatar2
} from "@material-ui/core";
import axios from "axios";
import sectiondata from "../../data/sections.json";
import { AuthContext, baseUrl } from "../../context/Auth";
import DepositModal from "./../DepositModal";
import WithdrawalModal from "./../WithdrawalModal";
import Avatar from "react-avatar";
import { toast } from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4)
  }
}));

const UserPanel = () => {
  const publicUrl = process.env.PUBLIC_URL + "/";
  const { userLogout, userInfo, user, setUserInfo } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [bar, setBar] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openWithdrawal, setOpenWithdrawal] = useState(false);
  const [deposits, setDeposits] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);

  const fetchDeposits = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}deposits/getDepositByUsername`,
        { username: user.username },
        {
          headers: {
            Authorization: `Bearer ${user.token}` // Include the token in the headers
          }
        }
      );
      if (response.status === 200) {
        setDeposits(response.data.deposit);
      }
    } catch (error) {
      console.error("Error fetching deposits:", error);
    }
  };

  const fetchWithdrawals = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}withdrawal/getWithdrawalByUsername`,
        { username: user.username },
        {
          headers: {
            Authorization: `Bearer ${user.token}` // Include the token in the headers
          }
        }
      );
      if (response.status === 200) {
        console.log(response.data.withdrawal);
        setWithdrawals(response.data.withdrawal);
      }
    } catch (error) {
      console.error("Error fetching withdrawals:", error);
    }
  };

  const fetchUserInfo = async () => {
    if (user) {
      try {
        const response = await axios
          .post(
            `${baseUrl}user/getUser`,
            {
              username: user.username
            },
            {
              headers: {
                Authorization: `Bearer ${user?.token}` // Include the token in the headers
              }
            }
          )
          .then((resps) => {
            setUserInfo(resps.data.user);
          });
      } catch (error) {
        toast.error(
          error.message || "An error occurred while fetching user information"
        );
      }
    }
  };

  useEffect(() => {
    fetchDeposits();
    fetchWithdrawals();
    fetchUserInfo();
  }, [user.username, user.token]);

  const handleSignOut = () => {
    userLogout();
    history.push("/");
  };

  const handleCreatedAt = (date) => {
    return new Date(date).toDateString();
  };

  const handleOpenDeposit = () => {
    setOpenDeposit(true);
  };

  const handleCloseDeposit = () => {
    setOpenDeposit(false);
  };

  const handleOpenWithdrawal = () => {
    setOpenWithdrawal(true);
  };

  const handleCloseWithdrawal = () => {
    setOpenWithdrawal(false);
  };

  const calculatePercentage = (balance, totalDeposit, totalWithdraws) => {
    const netBalance = balance - (totalDeposit - totalWithdraws);
    const percentage = (netBalance / totalDeposit) * 100;
    if (percentage > 0) {
      return percentage.toFixed(1);
    } else {
      return 0;
    }
  };

  return (
    <div className="user-panel">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <span
              className="user-panel-sidebar-btn"
              onClick={() => setBar(!bar)}
            >
              Sidebar menu
              {bar ? (
                <i className="fa fa-close" />
              ) : (
                <i className="fa fa-bars" />
              )}
            </span>

            {bar && (
              <ul className="user-panel-sidebar_2 bg-gradient">
                <li className="active">
                  <a href="#">Account Overview</a>
                </li>
                <li>
                  <a
                    onClick={handleOpenDeposit}
                    style={{ cursor: "pointer", color: "white" }}
                  >
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    Deposit Funds
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleOpenWithdrawal}
                    style={{ cursor: "pointer", color: "white" }}
                  >
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    Withdraw Funds
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleSignOut}>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    Sign Out
                  </a>
                </li>
              </ul>
            )}
            <ul className="user-panel-sidebar bg-gradient">
              <li className="active">
                <a href="#">Account Overview</a>
              </li>
              <li>
                <a
                  onClick={handleOpenDeposit}
                  style={{ cursor: "pointer", color: "white" }}
                >
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  Deposit Funds
                </a>
              </li>
              <li>
                <a
                  onClick={handleOpenWithdrawal}
                  style={{ cursor: "pointer", color: "white" }}
                >
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  Withdraw Funds
                </a>
              </li>
              <li>
                <a href="#" onClick={handleSignOut}>
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="user-panel-wrapper">
              <div className="user-info-area bg-panel">
                <div className="user-info-header">
                  <ul className="action-list">
                    <li>
                      <a href="#">
                        <i className="fa fa-user" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="user-thumb">
                  <Avatar name={userInfo?.fullName} />
                </div>
                <div className="user-content">
                  <h3 className="user-name">
                    Welcome Back, {userInfo?.fullName}
                  </h3>
                  <ul className="user-details-list">
                    <li>
                      Registration : {handleCreatedAt(userInfo?.createdAt)}
                    </li>
                    <li>Last Deposit Request : ₹ {userInfo?.firstDeposit} </li>
                    <li>
                      Investment Period Selected : {userInfo?.investmentPeriod}{" "}
                      Year's
                    </li>
                    <li>Monthly Revenue : 3 %</li>
                  </ul>
                </div>
              </div>
              {/* user-info-area end */}
              <div className="row statitics-item-area mb-none-30">
                <div className="col-lg-4">
                  <div className="statitics-item mb-30">
                    <h6 className="title">Total Balance</h6>
                    <span className="stat-amount color-1">
                      {" "}
                      ₹ {userInfo?.balance}
                    </span>
                    <div className="item-shape-1" />
                  </div>
                </div>
                {/* statitics-item end */}
                <div className="col-lg-4">
                  <div className="statitics-item mb-30">
                    <h6 className="title">Earning Total</h6>
                    <span className="stat-amount color-2">
                      {" "}
                      ₹{" "}
                      {(
                        userInfo?.balance -
                        (userInfo?.totalDeposit - userInfo?.totalWithdraws)
                      ).toFixed(1)}
                    </span>
                    <div className="item-shape-2" />
                  </div>
                </div>
                {/* statitics-item end */}
                <div className="col-lg-4">
                  <div className="statitics-item mb-30">
                    <h6 className="title">Percentage Earned</h6>
                    <span className="stat-amount color-3">
                      {" "}
                      {calculatePercentage(
                        userInfo?.balance,
                        userInfo?.totalDeposit,
                        userInfo?.totalWithdraws
                      )}{" "}
                      %
                    </span>
                    <div className="item-shape-3" />
                  </div>
                </div>
                {/* statitics-item end */}
              </div>
              <div className="revenue-statistics-area">
                <h3
                  style={{ color: "black", margin: "10px 0" }}
                  className="title"
                >
                  Deposit / Withdrawal Area
                </h3>
              </div>
              {/* revenue-statistics-area end */}
              {/* transaction-area start */}
              <div
                className="transaction-area left-bottom-line-bg common-pd-bottom-3"
                style={{
                  backgroundImage:
                    "url(" + publicUrl + "assets/img/shape/pen.png)"
                }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="transaction-tab-area">
                        <ul
                          className="transaction-tab nav nav-tabs"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item btn">
                            <a
                              className="nav-link bottom-right-radius-0 active"
                              id="home-tab"
                              data-toggle="tab"
                              href="#home"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              Deposit
                            </a>
                          </li>
                          <li className="nav-item btn m-0">
                            <a
                              className="nav-link bottom-left-radius-0"
                              id="profile-tab"
                              data-toggle="tab"
                              href="#profile"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              Withdraw
                            </a>
                          </li>
                        </ul>
                        <div
                          className="transaction-table tab-content"
                          id="myTabContent"
                        >
                          <div
                            className="tab-pane deposit-tab fade active show"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th colSpan={2} scope="col">
                                      Name
                                    </th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Deposit</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {deposits.map((deposit) => (
                                    <tr key={deposit._id}>
                                      <th
                                        scope="row"
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          gap: "10px",
                                          marginLeft: "10px"
                                        }}
                                      >
                                        <Avatar2 name={userInfo?.fullName} />
                                        <span> {userInfo.fullName}</span>
                                      </th>
                                      <td className="name"></td>
                                      <td>
                                        {new Date(
                                          deposit.createdAt
                                        ).toLocaleDateString()}
                                      </td>
                                      <td>₹{deposit.paymentAmount}</td>
                                      <td>INR</td>
                                      <td
                                        style={{
                                          color: deposit.paymentStatus
                                            ? "#07c259"
                                            : "#ff0000"
                                        }}
                                      >
                                        {deposit.paymentStatus
                                          ? "Success"
                                          : "Pending"}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="tab-pane withdraw-tab fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                          >
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th colSpan={2} scope="col">
                                      Name
                                    </th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Withdrawal</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {withdrawals.map((withdrawal) => (
                                    <tr key={withdrawal._id}>
                                      <th
                                        scope="row"
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          gap: "10px",
                                          marginLeft: "10px"
                                        }}
                                      >
                                        <Avatar2 name={userInfo?.fullName} />
                                        <span> {userInfo.fullName}</span>
                                      </th>
                                      <td className="name"></td>
                                      <td>
                                        {new Date(
                                          withdrawal.createdAt
                                        ).toLocaleDateString()}
                                      </td>
                                      <td>₹{withdrawal.paymentAmount}</td>
                                      <td>INR</td>
                                      <td
                                        style={{
                                          color: withdrawal.paymentStatus
                                            ? "#07c259"
                                            : "#ff0000"
                                        }}
                                      >
                                        {withdrawal.paymentStatus
                                          ? "Success"
                                          : "Pending"}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DepositModal
                open={openDeposit}
                handleClose={handleCloseDeposit}
                user={user}
                fetchDeposits={fetchDeposits}
              />
              <WithdrawalModal
                open={openWithdrawal}
                handleClose={handleCloseWithdrawal}
                user={user}
                fetchWithdrawals={fetchWithdrawals}
              />
              {/* transaction-area end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
