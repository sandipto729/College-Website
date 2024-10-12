const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./router/index');
const cookieParser = require('cookie-parser');
dotenv.config();


connectDB();

const app = express();
app.use(cookieParser());

app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ extended: true, limit: '50mb' })); 

app.use(cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true,
}));

app.use('/api', userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});