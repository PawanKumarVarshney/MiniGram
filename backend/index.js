import express , { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from "./routes/user.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;


const app = express();


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions={
    origin: 'http://localhost:5173',
    credentials: true,
}
app.use(cors(corsOptions));

// routes
app.use("/api/v2/users",userRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})