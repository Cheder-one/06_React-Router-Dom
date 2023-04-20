import React from "react";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </>
  );
};

export default PostList;
