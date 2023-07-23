import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import authRoute from "./routes/authRoute.js"
dotenv.config();

//database
connectDB();

const app = express();


//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth",authRoute);

app.get("/",(req,res)=>{
    res.send("Welcome to Ecommerce")
})

const PORT = process.env.PORT||8080;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT} in ${process.env.DEV_MODE}`)
})