import PostList from "../postsList";
import Post from "../post";

const Posts = ({ match, history }) => {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];

  const postId = match.params.postId;

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
