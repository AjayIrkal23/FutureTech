import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import axios from 'axios';
import User from './../model/user';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
	const { username, email, nakedpassword, phoneNumber, fullName } = req.body;

	try {
		const existingUser = await User.findOne({ email });
		const password = await bcrypt.hash(nakedpassword, config.round);
		if (existingUser) {
			return res.status(400).json({ Status: 'Duplicate', message: 'User Already Exists' });
		} else {
			const newUser = new User({
				username,
				email,
				fullName,
				password, // Make sure to hash the password before saving it to the database
				balance: '0',
				investmentPeriod: '0',
				gainPercentage: 0,
				phoneNumber: phoneNumber,
				firstDeposit: '0',
				firstDepositDate: '0',
				totalDeposit: '0',
				totalWithdraws: '0',
				startStatic: '0'
			});

			await newUser.save();
			return res.status(200).json({ Status: 'Success', message: 'Signup Successful.' });
		}
	} catch (error: any) {
		return res.status(500).json({ message: `${error.message} noob error` });
	}
};

const signIn = async (req: Request, res: Response, next: NextFunction) => {
	const { email, nakedpassword } = req.body;

	try {
		const isUser = await User.findOne({ email });

		if (!isUser) {
			return res.status(404).json({ Status: 'Not Found', message: 'User Not Found' });
		} else {
			const passwordMatch = await bcrypt.compare(nakedpassword, isUser.password);

			if (!passwordMatch) {
				return res.status(400).json({ Status: 'Wrong', message: 'Password Does Not Match' });
			} else {
				const token = jwt.sign({ email: isUser.email, name: isUser.username, id: isUser._id }, config.secret);
				return res.status(200).json({
					Status: 'Success',
					email: isUser.email,
					name: isUser.username,
					token: token,
					message: 'Successfully Logged In'
				});
			}
		}
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.body;

	try {
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(404).json({ Status: 'Not Found', message: 'User Not Found' });
		} else {
			return res.status(200).json({
				Status: 'Success',
				user: {
					username: user.username,
					fullName: user.fullName,
					email: user.email,
					balance: user.balance,
					investmentPeriod: user.investmentPeriod,
					gainPercentage: user.gainPercentage,
					firstDeposit: user.firstDeposit,
					totalDeposit: user.totalDeposit,
					totalWithdraws: user.totalWithdraws,
					phoneNumber: user.phoneNumber,
					createdAt: user.createdAt
				}
			});
		}
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

const updateUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.body;
	const updateData = req.body;

	try {
		const user = await User.findOneAndUpdate({ username }, updateData, { new: true, runValidators: true });

		if (!user) {
			return res.status(404).json({ Status: 'Not Found', message: 'User Not Found' });
		} else {
			return res.status(200).json({
				Status: 'Success',
				message: 'User Updated Successfully',
				user: {
					username: user.username,
					email: user.email,
					balance: user.balance,
					investmentPeriod: user.investmentPeriod,
					gainPercentage: user.gainPercentage,
					phoneNumber: user.phoneNumber
				}
			});
		}
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

export default {
	signUp,
	signIn,
	getUserByUsername,
	updateUserByUsername
};
