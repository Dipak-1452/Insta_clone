import express, { urlencoded } from "express";
import cors from "cors"; //By default, browsers block cross-origin requests for security reasons.so Use the cors middleware in Express to allow cross-origin requests.
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import postRoute from "./routes/post.route.js";
import messageRoute from "./routes/message.route.js";

dotenv.config({});
const PORT=process.env.PORT || 3000;

const app=express();
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOption={
    origin:'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials:true,
}
app.use(cors(corsOption));

// yha pr apni api ayengi
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);
app.use("/api/v1/message", messageRoute);

// app.get('/',(req,res)=>{
//     return res.status(200).json({message:'hi from server',success:true})
// })

app.listen(PORT,()=>{
    connectDB()
    console.log(`server listen at port ${PORT}`);
})