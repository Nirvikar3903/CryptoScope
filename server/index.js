import express from 'express'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'



dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log(err)
})

const app = express();
app.use(express.json())



app.listen(3000 , ()=>{
    console.log("Server in running on port 3000");
})

app.use('/server/user' , userRouter)  
app.use('/server/auth' , authRouter)  