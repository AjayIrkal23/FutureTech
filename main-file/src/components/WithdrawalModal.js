import React, { useContext, useState, useEffect } from "react";
import {
  Modal,
  Paper,
  Typography,
  Button,
  makeStyles,
  TextField
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
  },
  penaltyText: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    color: "red"
  }
}));

const WithdrawalModal = ({ open, handleClose, user, fetchWithdrawals }) => {
  const classes = useStyles();
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [upiId, setUpiId] = useState("");
  const [finalAmount, setFinalAmount] = useState("");
  const [penaltyMessage, setPenaltyMessage] = useState("");
  const [txnId, setTxnId] = useState(null);

  useEffect(() => {
    if (userInfo?.firstDeposit && userInfo?.firstDeposit !== "0") {
      setAmount(userInfo?.firstDeposit);
    }
  }, [userInfo]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
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

  const handleAmountSubmit = async () => {
    try {
      await axios
        .post(
          `${baseUrl}withdrawal`,
          {
            username: user.username,
            email: user.email,
            paymentAmount: amount,
            upiSent: upiId,
            contactNumber: userInfo?.phoneNumber
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}` // Include the token in the headers
            }
          }
        )
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.message.includes("penalty")) {
            const penalty = (amount * 0.05).toFixed(2);
            const finalWithdrawalAmount = (amount - penalty).toFixed(2);
            setPenaltyMessage(
              `An early withdrawal penalty of ₹${penalty} has been applied. You will receive ₹${finalWithdrawalAmount}.`
            );
            setTxnId(resp.data.withdrawal.txnId);
            setFinalAmount(finalWithdrawalAmount);
          } else {
            setTxnId(resp.data.withdrawal.txnId);
            setFinalAmount(amount);
          }

          fetchUserInfo();
          fetchWithdrawals();
          setStep(2);
          toast.success("Withdrawal Request Created");
        })
        .catch((errs) => {
          if (errs.response.data.message == "Insufficient balance") {
            toast.error(errs.response.data.message);
          } else if (
            errs.response.data.message ==
            "Insufficient balance after penalty deduction"
          ) {
            toast.error(errs.response.data.message);
          }
        });
    } catch (error) {
      console.error("Error creating withdrawal request:", error);
    }
  };

  const handleCancelWithdrawal = async () => {
    try {
      await axios.post(
        `${baseUrl}withdrawal/cancel`,
        {
          txnId
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}` // Include the token in the headers
          }
        }
      );
      toast.success("Withdrawal Request Cancelled");
      handleDone();
      fetchWithdrawals();
      fetchUserInfo();
      handleClose();
    } catch (error) {
      console.error("Error cancelling withdrawal request:", error);
    }
  };

  const handleDone = () => {
    setStep(1);
    setAmount("");
    setUpiId("");
    setPenaltyMessage("");
    setFinalAmount("");
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="withdrawal-modal-title"
      aria-describedby="withdrawal-modal-description"
    >
      <Paper className={classes.paper}>
        {step === 1 && (
          <>
            <Typography variant="h6" id="withdrawal-modal-title" gutterBottom>
              Enter Withdrawal Details
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
              label="UPI ID"
              type="text"
              value={upiId}
              onChange={handleUpiIdChange}
              variant="filled"
              className={classes.textField}
              fullWidth
            />
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
            <Typography variant="h6" id="withdrawal-modal-title" gutterBottom>
              Withdrawal Request Created
            </Typography>
            {penaltyMessage && (
              <Typography
                variant="body1"
                className={classes.penaltyText}
                gutterBottom
              >
                {penaltyMessage}
              </Typography>
            )}
            <Typography variant="h6" className={classes.amountText}>
              Amount to be Received: ₹{finalAmount}
            </Typography>
            <Typography
              variant="body1"
              className={classes.smallText}
              id="withdrawal-modal-description"
              gutterBottom
            >
              Your withdrawal request has been created successfully. The amount
              will be transferred to your UPI ID within 24 hours.
            </Typography>
            <Typography
              variant="body2"
              className={classes.smallText}
              gutterBottom
            >
              Withdrawal requests might take up to 24 hours to process. Please
              check your account balance for updates.
            </Typography>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleDone}
              fullWidth
            >
              Done
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleCancelWithdrawal}
              fullWidth
            >
              Cancel Withdrawal
            </Button>
          </>
        )}
      </Paper>
    </Modal>
  );
};

export default WithdrawalModal;
