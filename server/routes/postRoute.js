import express from 'express';
import { handleCreatePost, handleGetPosts } from '../controllers/postControllers.js';

const router = express.Router();

router.post('/post', handleCreatePost);
router.get('/posts', handleGetPosts);
export default router;
