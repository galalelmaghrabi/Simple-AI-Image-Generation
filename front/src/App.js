import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Generate from "./components/Generate";
import ImageBox from "./components/ImageBox";
import Gallery from "./components/Gallery";
import { getPosts, newPost } from "./api/api";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [imageGeneration, setImageGeneration] = useState("");
  const [posts, setPosts] = useState([]);

  const handleGetPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewPost = async () => {
    try {
      const response = await newPost(prompt, imageGeneration);
      setPrompt("");
    } catch (error) {
      alert(
        "This project is for training only and the number of pictures has ended."
      );
    }
  };

  const handleCancelImage = () => {
    setImageGeneration("");
    setPrompt("");
  };

  useEffect(() => {
    handleGetPosts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Generate
          setImageGeneration={setImageGeneration}
          prompt={prompt}
          setPrompt={setPrompt}
        />
        <ImageBox
          imageGeneration={imageGeneration}
          handleNewPost={handleNewPost}
          handleCancelImage={handleCancelImage}
        />
        <Gallery posts={posts} />
      </div>
    </>
  );
};

export default App;
