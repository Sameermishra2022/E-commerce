import express from 'express'
import {placecOrder, placeOrderStripe, placeOrderRezorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authuser from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

orderRouter.post('/place',authuser,placecOrder)
orderRouter.post('/stripe',authuser,placeOrderStripe)
orderRouter.post('/razorpay',authuser,placeOrderRezorpay)

orderRouter.post('/userorders',authuser,userOrders);

orderRouter.post('/verifyStripe', authuser, verifyStripe)
orderRouter.post('/verifyRazorpay', authuser, verifyRazorpay)

export default orderRouter;