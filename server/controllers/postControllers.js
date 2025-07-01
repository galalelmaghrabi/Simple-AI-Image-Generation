import { createNewPost, getPosts } from "../models/Posts.js";
import cloudinary from "../cloudinary.js";

export const handleCreatePost = async (req, res) => {
  const { prompt, imageBase64 } = req.body;

  try {
    const uploaded = await cloudinary.uploader.upload(imageBase64, {
      folder: "ai-images",
    });

    const response = await createNewPost(prompt, uploaded.secure_url);
    res.status(201).json(response);
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ error: "Failed to create post" });
  }
};
export const handleGetPosts = async (req, res) => {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to get posts" });
  }
};
