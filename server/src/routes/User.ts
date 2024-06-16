import express, { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import userController from '../controllers/userController';
import depositController from '../controllers/depositController';
import withdrawalController from '../controllers/withdrawalController';
import authenticate from '../middleware/authenticate';

const router = express.Router();

router.get('/hello', (req, res, next) => res.status(200).json({ message: 'hello vaiii' }));
router.post('/user/register', userController.signUp);
router.post('/user/login', userController.signIn);
router.post('/user/getUser', authenticate, userController.getUserByUsername);
router.post('/user/updateUser', authenticate, userController.updateUserByUsername);

// Deposit routes
router.post('/deposit/add', authenticate, depositController.addNewDeposit);
router.get('/deposits/getAll', authenticate, depositController.getAllDeposits);
router.post('/deposits/getDepositByUsername', authenticate, depositController.getDepositByUsername);
router.post('/deposits/updateDepositByTxn', authenticate, depositController.updateDepositByTxn);
router.delete('/deposits/delete/:txnId', authenticate, depositController.deleteDepositByTxn);

// Withdrawal routes
router.post('/withdrawal', authenticate, withdrawalController.addNewWithdrawal);
router.get('/withdrawals', authenticate, withdrawalController.getAllWithdrawals);
router.post('/withdrawal/getWithdrawalByUsername', authenticate, withdrawalController.getWithdrawalByUsername);
router.post('/withdrawal/updateWithdrawalByTxn', authenticate, withdrawalController.updateWithdrawalByTxn);
router.post('/withdrawal/cancel', authenticate, withdrawalController.deleteWithdrawal);

export = router;
