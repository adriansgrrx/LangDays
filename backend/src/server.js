import express from 'express';
import userRouter from './routes/userRouter.js'
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5001
const EMAIL = process.env.VITE_EMAIL

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT)
        console.log("Email:", EMAIL)
    });
});