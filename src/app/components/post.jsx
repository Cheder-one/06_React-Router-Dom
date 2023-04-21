import React from "react";

const Post = ({ id, posts }) => {
  // Да, передаем некий URL поста => возвращаем возможный пост
  const getPostById = (id) => {
    return posts.find((post) => String(post.id) === id);
  };
  const post = getPostById(id);

  return <h2>{post ? post.title : `Пост №${id} не найден`}</h2>;
};

export default Post;
