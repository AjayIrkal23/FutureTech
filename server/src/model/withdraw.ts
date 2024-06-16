import mongoose, { Document, Schema } from 'mongoose';

interface IWithdraw extends Document {
	username: string;
	email: string;
	paymentAmount: string;
	upiSent: string;
	txnId: string;
	contactNumber: string;
	paymentStatus: boolean;
}

const WithdrawSchema: Schema = new Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true },
		paymentAmount: { type: String, required: true },
		upiSent: { type: String, required: true },
		contactNumber: { type: String, required: true },
		txnId: { type: String, unique: true },
		paymentStatus: { type: Boolean, required: true }
	},
	{ timestamps: true }
);

const Withdraw = mongoose.model<IWithdraw>('Withdraws', WithdrawSchema);

export default Withdraw;
