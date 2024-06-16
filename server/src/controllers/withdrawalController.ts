import { Request, Response, NextFunction } from 'express';
import User from '../model/user';
import Withdraw from '../model/withdraw';
import { v4 as uuidv4 } from 'uuid';

const addNewWithdrawal = async (req: Request, res: Response, next: NextFunction) => {
	const { username, email, paymentAmount, upiSent, contactNumber } = req.body;

	const txnId = uuidv4(); // Generate a UUID for the transaction ID

	try {
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(404).json({ Status: 'Not Found', message: 'User Not Found' });
		}

		const currentBalance = parseFloat(user.balance);
		const amountToWithdraw = parseFloat(paymentAmount);

		if (user.firstDeposit && user.firstDeposit !== '0' && currentBalance > 0) {
			const firstDepositDate = new Date(user.startStatic);
			const currentDate = new Date();
			const investmentPeriodInMs = parseInt(user.investmentPeriod) * 365 * 24 * 60 * 60 * 1000;

			const timeElapsed = currentDate.getTime() - firstDepositDate.getTime();
			console.log(investmentPeriodInMs, timeElapsed);
			if (timeElapsed < investmentPeriodInMs) {
				const penalty = amountToWithdraw * 0.05;
				const finalWithdrawalAmount = amountToWithdraw - penalty;

				if (currentBalance >= finalWithdrawalAmount) {
					const newWithdrawal = new Withdraw({
						username,
						email,
						paymentAmount: finalWithdrawalAmount.toFixed(2),
						upiSent,
						contactNumber,
						txnId,
						paymentStatus: false
					});

					await newWithdrawal.save();

					user.totalWithdraws = (parseFloat(user.totalWithdraws) + finalWithdrawalAmount).toFixed(2);
					user.balance = (currentBalance - finalWithdrawalAmount).toFixed(2);
					await user.save();

					return res.status(201).json({
						Status: 'Success',
						message: 'Withdrawal added successfully with 5% penalty for early withdrawal',
						withdrawal: newWithdrawal
					});
				} else {
					return res.status(400).json({ message: 'Insufficient balance after penalty deduction' });
				}
			}
		}

		if (currentBalance >= amountToWithdraw) {
			const newWithdrawal = new Withdraw({
				username,
				email,
				paymentAmount,
				upiSent,
				contactNumber,
				txnId,
				paymentStatus: false
			});

			await newWithdrawal.save();

			user.totalWithdraws = (parseFloat(user.totalWithdraws) + amountToWithdraw).toFixed(2);
			user.balance = (currentBalance - amountToWithdraw).toFixed(2);
			await user.save();

			return res.status(200).json({
				Status: 'Success',
				message: 'Withdrawal added successfully',
				withdrawal: newWithdrawal
			});
		} else {
			return res.status(400).json({ message: 'Insufficient balance' });
		}
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

const getAllWithdrawals = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const withdrawals = await Withdraw.find({ paymentStatus: false });
		return res.status(200).json({ Status: 'Success', withdrawals });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

const getWithdrawalByUsername = async (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.body;

	try {
		const withdrawal = await Withdraw.find({ username });

		if (!withdrawal) {
			return res.status(404).json({ Status: 'Not Found', message: 'Withdrawal Not Found' });
		} else {
			return res.status(200).json({ Status: 'Success', withdrawal });
		}
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

const updateWithdrawalByTxn = async (req: Request, res: Response, next: NextFunction) => {
	const { txnId, paymentStatus } = req.body;
	try {
		const updatedWithdrawal = await Withdraw.findOneAndUpdate({ txnId }, { paymentStatus }, { new: true });
		if (!updatedWithdrawal) {
			return res.status(404).json({ message: 'Withdrawal not found' });
		}
		return res.status(200).json({ message: 'Withdrawal updated successfully', withdrawal: updatedWithdrawal });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

const deleteWithdrawal = async (req: Request, res: Response, next: NextFunction) => {
	const { txnId } = req.body;

	try {
		const deletedWithdrawal = await Withdraw.findOneAndDelete({ txnId });

		if (!deletedWithdrawal) {
			return res.status(404).json({ Status: 'Not Found', message: 'Withdrawal Not Found' });
		}

		// Update user's totalWithdraws and balance
		const user = await User.findOne({ username: deletedWithdrawal.username });

		if (user) {
			user.totalWithdraws = (parseFloat(user.totalWithdraws) - parseFloat(deletedWithdrawal.paymentAmount)).toFixed(2);
			user.balance = (parseFloat(user.balance) + parseFloat(deletedWithdrawal.paymentAmount)).toFixed(2);
			await user.save();
		}

		return res.status(200).json({ Status: 'Success', message: 'Withdrawal Cancelled Successfully' });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

export default {
	addNewWithdrawal,
	updateWithdrawalByTxn,
	getAllWithdrawals,
	deleteWithdrawal,
	getWithdrawalByUsername
};
