import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Container,
  Typography,
  CircularProgress
} from "@material-ui/core";
import axios from "axios";
import { baseUrl } from "../context/Auth";
import toast from "react-hot-toast";

const Admin = () => {
  const [deposits, setDeposits] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFqYXlpcmthbDIzQGdtYWlsLmNvbSIsIm5hbWUiOiJhamF5aXJrYWwyMyIsImlkIjoiNjY2ZTk1ODM5MmQwMDY5YWM2NmVjZjkyIiwiaWF0IjoxNzE4NTIzMzEyfQ.BaKJS7m82gR1nYTYf-tXj-o6AHPPyjTrw3iXhzQooAw";

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const response = await axios.get(`${baseUrl}deposits/getAll`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setDeposits(response.data.deposits);
      } catch (error) {
        console.error("Error fetching deposits:", error);
      }
    };

    const fetchWithdrawals = async () => {
      try {
        const response = await axios.get(`${baseUrl}withdrawals`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setWithdrawals(response.data.withdrawals);
      } catch (error) {
        console.error("Error fetching withdrawals:", error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchDeposits(), fetchWithdrawals()]);
      setLoading(false);
    };

    fetchData();
  }, [token]);

  const handleConfirmDeposit = async (txnId) => {
    try {
      await axios.post(
        `${baseUrl}deposits/updateDepositByTxn`,
        { txnId, paymentStatus: true },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      toast.success("Deposit Confirmed");
      setDeposits((prev) => prev.filter((deposit) => deposit.txnId !== txnId));
    } catch (error) {
      console.error("Error confirming deposit:", error);
    }
  };

  const handleRejectDeposit = async (txnId) => {
    try {
      await axios.delete(`${baseUrl}deposits/delete/${txnId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("Deposit Rejected");
      setDeposits((prev) => prev.filter((deposit) => deposit.txnId !== txnId));
    } catch (error) {
      console.error("Error rejecting deposit:", error);
    }
  };

  const handleConfirmWithdrawal = async (txnId) => {
    try {
      await axios.post(
        `${baseUrl}withdrawal/updateWithdrawalByTxn`,
        { txnId, paymentStatus: true },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      toast.success("Withdrawal Confirmed");
      setWithdrawals((prev) =>
        prev.filter((withdrawal) => withdrawal.txnId !== txnId)
      );
    } catch (error) {
      console.error("Error confirming withdrawal:", error);
    }
  };

  const handleRejectWithdrawal = async (txnId) => {
    try {
      await axios.post(
        `${baseUrl}withdrawal/cancel`,
        { txnId },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      toast.success("Withdrawal Rejected");
      setWithdrawals((prev) =>
        prev.filter((withdrawal) => withdrawal.txnId !== txnId)
      );
    } catch (error) {
      console.error("Error rejecting withdrawal:", error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Page
      </Typography>

      <Typography variant="h5" gutterBottom>
        Deposits
      </Typography>
      <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>UPI To</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deposits.map((deposit) => (
              <TableRow key={deposit.txnId}>
                <TableCell>{deposit.username}</TableCell>
                <TableCell>{deposit.email}</TableCell>
                <TableCell>₹{deposit.paymentAmount}</TableCell>
                <TableCell>{deposit.upiRecieved}</TableCell>
                <TableCell>{deposit.contactNumber}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleConfirmDeposit(deposit.txnId)}
                  >
                    Confirm
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRejectDeposit(deposit.txnId)}
                    style={{ marginLeft: "10px" }}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom>
        Withdrawals
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>UPI To</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {withdrawals.map((withdrawal) => (
              <TableRow key={withdrawal.txnId}>
                <TableCell>{withdrawal.username}</TableCell>
                <TableCell>{withdrawal.email}</TableCell>
                <TableCell>₹{withdrawal.paymentAmount}</TableCell>
                <TableCell>{withdrawal.upiSent}</TableCell>
                <TableCell>{withdrawal.contactNumber}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleConfirmWithdrawal(withdrawal.txnId)}
                  >
                    Confirm
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRejectWithdrawal(withdrawal.txnId)}
                    style={{ marginLeft: "10px" }}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Admin;
