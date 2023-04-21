import React from "react";

const PostList = ({ posts }) => {
  // Нет, не передаем никакой URL => выводим список постов
  return (
    <>
      {posts.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </>
  );
};

export default PostList;
