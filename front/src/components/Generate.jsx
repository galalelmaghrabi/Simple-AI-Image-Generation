import React from "react";
import { generateImage } from "../api/api";

const Generate = ({ setImageGeneration, prompt, setPrompt }) => {
  const handleGenerate = async () => {
    try {
      const response = await generateImage(prompt);
      setImageGeneration(response.data.image);
    } catch (error) {
      alert(
        "This project is for training only and the number of pictures has ended."
      );
    }
  };
  return (
    <>
      <h1 className="title">AI Image Generator</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Describe your image..."
          className="prompt-input"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="generate-button" onClick={handleGenerate}>
          Generate
        </button>
      </div>
    </>
  );
};

export default Generate;
