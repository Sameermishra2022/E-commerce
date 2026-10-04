import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/mongodb.js'; 
import userRouter from './routes/userRouter.js';
import connectCloudniary from './config/cloudniary.js';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRouter.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudniary();

app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter)

app.get('/',(req,res)=>{
    res.send("Api Working")
})

app.listen(port, ()=>{
    console.log("Server is started at port number :", port);
})