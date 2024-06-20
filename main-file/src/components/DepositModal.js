import React, { useContext, useState, useEffect } from "react";
import {
  Modal,
  Paper,
  Typography,
  Button,
  makeStyles,
  TextField,
  Grid,
  Link
} from "@material-ui/core";
import axios from "axios";
import { AuthContext, baseUrl } from "../context/Auth";
import { toast } from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4)
  },
  image: {
    width: "100%",
    marginBottom: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(1),
    fontSize: "0.8rem",
    background: "linear-gradient(to right, #7b4397, #dc2430)",
    color: "#fff"
  },
  textField: {
    marginBottom: theme.spacing(2),
    width: "100%"
  },
  smallText: {
    fontSize: "10px"
  },
  amountText: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
}));

const DepositModal = ({ open, handleClose, user, fetchDeposits }) => {
  const classes = useStyles();
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [futureValue, setFutureValue] = useState("");
  const [totalInvestment, setTotalInvestment] = useState("");

  useEffect(() => {
    if (userInfo?.firstDeposit && userInfo?.firstDeposit !== "0") {
      setAmount(userInfo?.firstDeposit);
    }
    if (userInfo?.investmentPeriod && userInfo?.investmentPeriod !== "0") {
      setInvestmentPeriod(userInfo?.investmentPeriod);
    }
  }, [userInfo]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleInvestmentPeriodChange = (e) => {
    setInvestmentPeriod(e.target.value);
  };

  const calculateSIP = () => {
    const rateOfReturn = 36;
    const monthlyRate = rateOfReturn / 100 / 12;
    const totalMonths = investmentPeriod * 12;
    const totalInvestment = amount * totalMonths;
    const futureValue =
      amount *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);

    setTotalInvestment(totalInvestment.toFixed(2));
    setFutureValue(futureValue.toFixed(2));
  };

  useEffect(() => {
    calculateSIP();
  }, [amount, investmentPeriod]);

  const handleAmountSubmit = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}deposit/add`,
        {
          username: user.username,
          email: user.email,
          paymentAmount: amount,
          investmentPeriod: investmentPeriod, // Include investment period
          upiRecieved: "VaibhavUpi",
          paymentStatus: false, // Assuming initial value is false
          contactNumber: userInfo?.phoneNumber
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}` // Include the token in the headers
          }
        }
      );

      if (response.status === 201) {
        toast.success("Deposit Request Created");
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
                error.message ||
                  "An error occurred while fetching user information"
              );
            }
          }
        };

        fetchUserInfo();
        fetchDeposits();
        setStep(2);
      } else {
        console.error("Failed to create deposit request");
      }
    } catch (error) {
      console.error("Error creating deposit request:", error);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/payment.png"; // Replace with your UPI scanner image URL
    link.download = "UPI_Scanner.png";
    link.click();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="deposit-modal-title"
      aria-describedby="deposit-modal-description"
    >
      <Paper className={classes.paper}>
        {step === 1 && (
          <>
            <Typography variant="h6" id="deposit-modal-title" gutterBottom>
              Enter Deposit Details
            </Typography>
            <TextField
              label="Amount"
              type="number"
              value={amount}
              onChange={handleAmountChange}
              variant="filled"
              className={classes.textField}
              fullWidth
            />
            <TextField
              label="Investment Period (Years)"
              type="number"
              value={investmentPeriod}
              onChange={handleInvestmentPeriodChange}
              variant="filled"
              className={classes.textField}
              fullWidth
              disabled={
                userInfo?.investmentPeriod && userInfo?.investmentPeriod !== "0"
              }
            />
            {futureValue && totalInvestment && (
              <div className="result mt-4">
                <h4>Total Investment:</h4>
                <p>₹ {totalInvestment}</p>
                <h4>Future Value:</h4>
                <p>₹ {futureValue}</p>
              </div>
            )}
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleAmountSubmit}
              fullWidth
            >
              Submit
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <Typography variant="h6" id="deposit-modal-title" gutterBottom>
              Scan to Deposit
            </Typography>

            <Typography
              variant="h7"
              sx={{ marginBottom: "5px" }}
              id="deposit-modal-title"
              gutterBottom
            >
              Upi Number - 7338506103
            </Typography>
            <img
              src="/payment.png" // Replace with your UPI scanner image URL
              alt="UPI Scanner"
              className={classes.image}
            />
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleDownload}
              fullWidth
            >
              Download UPI Scanner
            </Button>
            <Typography variant="h6" className={classes.amountText}>
              Amount to Pay: ₹{amount}
            </Typography>
            <Typography
              variant="body1"
              className={classes.smallText}
              id="deposit-modal-description"
              gutterBottom
            >
              Please scan the above UPI QR code to make a deposit. Once the
              payment is completed, click the button below to confirm your
              transaction.
            </Typography>
            <Typography
              variant="body2"
              className={classes.smallText}
              gutterBottom
            >
              Deposit might take up to 24 hours to appear in your account
              dashboard. Deposit requests will expire after 3 days.
            </Typography>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleClose} // Replace with your submit logic
              fullWidth
            >
              Done
            </Button>
          </>
        )}
      </Paper>
    </Modal>
  );
};

export default DepositModal;
