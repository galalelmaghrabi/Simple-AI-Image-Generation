import express from 'express';
import { generateImage } from '../controllers/generateImageController.js';

const router = express.Router();

router.post('/generate', generateImage);

export default router;