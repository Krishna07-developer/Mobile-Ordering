import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
import cookieParser from "cookie-parser";
import userRouter from "./routers/user.route.js"
import authRouter from "./routers/auth.router.js"
import mobilesRouter from "./routers/mobiles.router.js"
import cors from "cors";

const corsOptions = {
    origin : "http://localhost:5173/"
}


const app = express()

mongoose.connect(process.env.MONGO_SERVER).then(()=>{
    console.log('Connected Datbase');
}).catch((err)=>{
    console.log(err)
})

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use("/api/user" , userRouter)
app.use("/api/auth" , authRouter)
app.use("/api/mobiles" , mobilesRouter)


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