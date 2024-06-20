import { Request, Response, NextFunction } from 'express';
import User from '../model/user';
import { v4 as uuidv4 } from 'uuid';
import Deposit from '../model/deposit';

const addNewDeposit = async (req: Request, res: Response, next: NextFunction) => {
	const { username, email, paymentAmount, upiRecieved, contactNumber, investmentPeriod } = req.body;

	try {
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(404).json({ Status: 'Not Found', message: 'User Not Found' });
		}

		const txnId = uuidv4(); // Generate a UUID for the transaction ID

		const newDeposit = new Deposit({
			username,
			email,
			paymentAmount,
			upiRecieved,
			investmentPeriod,
			contactNumber,
			txnId,
			paymentStatus: false
		});

		await newDeposit.save();

		// Update user's totalDeposit
		user.firstDeposit = paymentAmount;
		user.investmentPeriod = investmentPeriod;
		await user.save();

		return res.status(201).json({ Status: 'Success', message: 'Deposit added successfully', deposit: newDeposit });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Adjust the import path to where your Deposit model is located

const getAllDeposits = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const deposits = await Deposit.find({ paymentStatus: false });
		return res.status(200).json({ Status: 'Success', deposits });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

const deleteDepositByTxn = async (req: Request, res: Response, next: NextFunction) => {
	const { txnId } = req.params;
	try {
		const deletedDeposit = await Deposit.findOneAndDelete({ txnId });
		if (!deletedDeposit) {
			return res.status(404).json({ Status: 'Not Found', message: 'Deposit Not Found' });
		}
		return res.status(200).json({ Status: 'Success', message: 'Deposit Rejected Successfully' });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

const getDepositByUsername = async (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.body;

	try {
		const deposit = await Deposit.find({ username: username });

		if (!deposit) {
			return res.status(404).json({ Status: 'Not Found', message: 'Deposit Not Found' });
		} else {
			return res.status(200).json({ Status: 'Success', deposit });
		}
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

const updateDepositByTxn = async (req: Request, res: Response, next: NextFunction) => {
	const { txnId } = req.body;
	const updateData = req.body;

	try {
		const updatedDeposit = await Deposit.findOneAndUpdate({ txnId: txnId }, updateData, { new: true, runValidators: true });

		if (!updatedDeposit) {
			return res.status(404).json({ Status: 'Not Found', message: 'Deposit Not Found' });
		}

		// Check if the payment status is updated to true
		if (updateData.paymentStatus === true) {
			const user = await User.findOne({ email: updatedDeposit.email });

			if (user) {
				user.totalDeposit = (parseFloat(user.totalDeposit) + parseFloat(updatedDeposit.paymentAmount)).toFixed(2);
				user.balance = (parseFloat(user.balance) + parseFloat(updatedDeposit.paymentAmount)).toFixed(2);

				if (user.firstDepositDate == '0' || user.firstDepositDate == null) {
					user.firstDepositDate = new Date().toDateString();
				}

				if (user.startStatic == '0' || user.startStatic == null) {
					user.startStatic = new Date().toDateString();
				}

				// Set didUserDepositSIP to true
				user.didUserDepositSIP = true;

				await user.save();
			}
		}

		return res.status(200).json({ Status: 'Success', message: 'Deposit Updated Successfully', deposit: updatedDeposit });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

export default {
	addNewDeposit,
	updateDepositByTxn,
	getAllDeposits,
	getDepositByUsername,
	deleteDepositByTxn
};
