import express from "express";
import mongoose from "mongoose";
import { Login, Register } from "./controllers/UserController.js";
import dotenv from 'dotenv';
import cors from "cors"
import morgan from 'morgan'


const app = express();
app.use(express.json());
dotenv.config();
app.use(cors())
app.use(morgan('dev'))

// app.post('/', (req, res)=> {
//     res.send("Working")
// })

app.post('/register', Register)
app.post('/login', Login)


mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    console.log("Connected to Db")
}).catch((error) => {
    console.log("Error in connecting mongoDb", error)
})

app.listen(4002, ()=> {
    console.log("Server running on port 4002")
})