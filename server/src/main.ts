import { config } from './config/config';
import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import routes from './routes/User';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { addMonthlyInterest, deleteExpiredDeposits } from './controllers/cronjob';

const router = express();
router.use(morgan('common'));
router.use(cors());
router.use(express.json());

const StartServer = () => {
	router.use((req, res, next) => {
		next();
	});
	router.use(express.urlencoded({ extended: true }));
	router.use(express.json());

	mongoose
		.connect(config.DB)
		.then(() => {
			console.log('Connected to MongoDB');
			addMonthlyInterest();
			deleteExpiredDeposits();
		})
		.catch((err) => console.log(err));

	router.use((req: Request, res: Response, next: NextFunction) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
		if (req.method === 'OPTIONS') {
			res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
			return res.status(200).json({});
		}
		next();
	});

	router.use('/api', routes);

	router.get('/', (req: Request, res: Response, next: NextFunction) => res.status(200).json({ message: 'response from server 👍 ' }));
	router.use((req: Request, res: Response, next: NextFunction) => {
		const error = new Error('Not found');

		return res.status(404).json({ message: error.message });
	});

	http.createServer(router).listen(config.server.port, () => console.info(`Server running on port ${config.server.port}`));
};

StartServer();
