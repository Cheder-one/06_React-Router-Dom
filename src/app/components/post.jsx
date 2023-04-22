import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ id, posts }) => {
  const history = useHistory();
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
