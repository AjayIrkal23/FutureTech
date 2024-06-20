import cron from 'node-cron';
import User from '../model/user';
import Deposit from '../model/deposit';

// Function to add monthly interest
const addMonthlyInterest = async () => {
	try {
		const users = await User.find({});

		users.forEach(async (user) => {
			if (user.firstDeposit && user.didUserDepositSIP) {
				const firstDepositDate = new Date(user.firstDepositDate);
				const currentDate = new Date();

				const monthsDifference = currentDate.getMonth() - firstDepositDate.getMonth() + 12 * (currentDate.getFullYear() - firstDepositDate.getFullYear());

				if (monthsDifference > 0 && currentDate.getDate() === firstDepositDate.getDate()) {
					const updatedBalance = (parseFloat(user.balance) * 1.03).toFixed(2);
					const updatedGainPercentage = user.gainPercentage + 3;

					user.balance = updatedBalance;
					user.gainPercentage = updatedGainPercentage;
					user.firstDepositDate = currentDate;
					user.didUserDepositSIP = false; // Set the flag to false after adding interest

					await user.save();
				}
			}
		});

		console.log('Monthly interest added to all eligible users.');
	} catch (error) {
		console.error('Error adding monthly interest:', error);
	}
};

// Schedule the cron job to run daily at midnight
cron.schedule('0 0 * * *', addMonthlyInterest);

const deleteExpiredDeposits = async () => {
	try {
		const currentDate = new Date();
		const threeDaysAgo = new Date(currentDate);
		threeDaysAgo.setDate(currentDate.getDate() - 3);

		await Deposit.deleteMany({
			createdAt: { $lt: threeDaysAgo },
			paymentStatus: false
		});

		console.log('Expired deposits deleted successfully.');
	} catch (error) {
		console.error('Error deleting expired deposits:', error);
	}
};

// Schedule the cron jobs to run daily at midnight
cron.schedule('0 0 * * *', addMonthlyInterest);
cron.schedule('0 0 * * *', deleteExpiredDeposits);

// Export the cron job functions to ensure they get executed
export { addMonthlyInterest, deleteExpiredDeposits };
