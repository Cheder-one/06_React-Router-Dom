import React from "react";

const Post = ({ id, posts, history }) => {
  const getPostById = (id) => {
    return posts.find((post) => String(post.id) === id);
  };
  const post = getPostById(id);

  const handleSave = () => {
    history.replace(`/posts`);
  };

  return (
    <>
      <h2>{post ? post.title : `Пост №${id} не найден`}</h2>
      <button
        onClick={() => handleSave()}
        className="btn btn-outline-success btn-sm mt-2"
      >
        Save
      </button>
    </>
  );
};

export default Post;
