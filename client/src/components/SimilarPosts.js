import React from "react";
import { posts } from "../dummy_data.js";

const SimilarPosts = () => {
  return (
    <div className="similar-posts">
      <h1>Similar posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default SimilarPosts;
