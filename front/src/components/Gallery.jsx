import React from "react";

const Gallery = ({ posts }) => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {posts.map((post, index) => (
          <img
            key={index}
            src={post.imageUrl}
            alt={post.prompt}
            title={post.prompt}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
