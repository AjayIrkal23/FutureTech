import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8000;
const secret = String(process.env.SECRET_KEY);
const round = Number(process.env.SALT_ROUND);
const DB = String(process.env.DB);

export const config = {
	server: { port: SERVER_PORT },
	secret,
	round,
	DB
};
