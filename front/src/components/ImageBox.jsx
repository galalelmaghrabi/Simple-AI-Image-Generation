import React from "react";

const ImageBox = ({ imageGeneration, handleCancelImage, handleNewPost }) => {
  return (
    <div className="image-preview-box">
      {imageGeneration ? (
        <img
          src={`data:image/png;base64,${imageGeneration}`}
          alt="Generated"
          className="generated-image-small"
        />
      ) : (
        <img
          src={"960x0.webp"}
          alt="Generated"
          className="generated-image-small"
        />
      )}
      <div className="image-actions">
        <button className="cancel-button" onClick={handleCancelImage}>
          Cancel
        </button>
        <button className="share-button" onClick={handleNewPost}>
          Share
        </button>
      </div>
    </div>
  );
};

export default ImageBox;
