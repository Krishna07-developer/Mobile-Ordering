import express from "express"
import {getMobiles} from "../controllers/mobiles.controller.js"

const router = express.Router();


router.get('/getMobiles' , getMobiles)

export default router;