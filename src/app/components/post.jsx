import React from "react";

const Post = ({ match, posts }) => {
  const postId = match.params.postId;

  const getPostById = (id) => {
    return posts.find((post) => String(post.id) === id);
  };
  const post = getPostById(postId);

  return <h2>{post ? post.title : `Пост №${postId} не найден`}</h2>;
};

export default Post;
