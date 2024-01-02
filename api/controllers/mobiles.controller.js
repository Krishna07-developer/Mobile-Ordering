
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()




const url = mongoose.connect(process.env.MONGO_SERVER);

const db = mongoose.connection;

db.on('error' , console.error.bind(console , 'Connection error'));
db.once('open', ()=>{
    console.log('Connected to db');
})



export const getMobiles =async (req,res,next)=>{
    try {
        const limit = parseInt(req.query.limit) || 9;
        const startIndex = parseInt(req.query.startIndex) || 0;
        const searchTerm = req.query.searchTerm || '';
        const price = req.query.price || ''


        const data = await db.collection('mobiles').find({name : {$regex : searchTerm , $options : 'i'}} , {price : {$lte : {price}}}).limit(limit).skip(startIndex).toArray()
        return res.status(200).json(data);
    } catch (error) {
        next(error)
        // res.status(500).json({ error: 'Internal Server Error' });
    }


}





