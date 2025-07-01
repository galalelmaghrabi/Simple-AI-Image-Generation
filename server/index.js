import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import generateImageRoute from './routes/generateImageRoute.js';
import postRoute from './routes/postRoute.js';
import { dbConnection } from "./db.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
app.use(express.json());
await dbConnection();
// API Routes
app.use('/api', generateImageRoute);
app.use('/api', postRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
