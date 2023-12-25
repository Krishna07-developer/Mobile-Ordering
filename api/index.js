import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
import userRouter from "./routers/user.route.js"
import authRouter from "./routers/auth.router.js"
const app = express()

mongoose.connect(process.env.MONGO_SERVER).then(()=>{
    console.log('Connected Datbase');
}).catch((err)=>{
    console.log(err)
})

app.use(express.json());
app.use("/api/user" , userRouter)
app.use("/api/auth" , authRouter)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})