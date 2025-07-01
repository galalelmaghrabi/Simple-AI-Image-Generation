import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

export const createNewPost = async (prompt, imageUrl) => {
  try {
    const post = new Post({ prompt, imageUrl });
    await post.save();
    return post;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    return posts;
  } catch (error) {
    throw error;
  }
};
export default Post;
