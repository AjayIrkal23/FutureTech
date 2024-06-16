import mongoose, { Document, Schema } from 'mongoose';

interface IDeposit extends Document {
	username: string;
	email: string;
	paymentAmount: string;
	upiRecieved: string;
	contactNumber: string;
	txnId: string | null;
	paymentStatus: boolean;
}

const UserSchema: Schema = new Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true },
		paymentAmount: { type: String, required: true },
		upiRecieved: { type: String, required: true },
		investmentPeriod: { type: String, required: true },
		contactNumber: { type: String, required: true },
		txnId: { type: String, unique: true },
		paymentStatus: { type: Boolean, required: true }
	},
	{ timestamps: true }
);

const Deposit = mongoose.model<IDeposit>('Deposits', UserSchema);

export default Deposit;
