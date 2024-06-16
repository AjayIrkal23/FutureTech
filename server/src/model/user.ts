import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
	fullName: string;
	username: string;
	email: string;
	password: string;
	balance: string;
	investmentPeriod: string;
	totalDeposit: string;
	totalWithdraws: string;
	gainPercentage: number;
	phoneNumber: string;
	firstDeposit: string | null;
	firstDepositDate: any;
	startStatic: string;
	createdAt?: Date; // Add createdAt to the interface
}

const UserSchema: Schema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		fullName: { type: String, required: true },
		balance: { type: String, required: true },
		investmentPeriod: { type: String, required: true },
		gainPercentage: { type: Number, required: true },
		firstDeposit: { type: String, required: true },
		firstDepositDate: { type: String, required: true },
		startStatic: { type: String, required: true },
		totalDeposit: { type: String, required: true },
		totalWithdraws: { type: String, required: true },
		phoneNumber: { type: String, required: true, unique: true }
	},
	{ timestamps: true }
);

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
