import PostList from "../postsList";
import Post from "../post";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];

  // const postId = match.params.postId;
  // const postId = params.postId;
  const { postId } = params;

  return (
    <>
      {/* Передаем ли мы опциональный URL адрес поста? */}
      {postId ? (
        <>
          <Post posts={posts} id={postId} history={history} />
        </>
      ) : (
        <PostList posts={posts} />
      )}
    </>
  );
};

export default Posts;
