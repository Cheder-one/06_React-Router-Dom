import PostList from "../postsList";
import Post from "../post";
import query from "query-string";
import _ from "lodash";

const Posts = ({ match, location }) => {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];

  const search = query.parse(location.search);
  const postId = match.params.postId;

  // Если в объекте `search` есть наш переданный в URL параметр `count` =>
  const cropPosts = search.count
    ? _(posts).slice(0).take(search.count).value()
    : posts;

  return (
    <>
      {/* Передаем ли мы опциональный URL адрес поста? */}
      {postId ? (
        <>
          <Post posts={posts} id={postId} />
        </>
      ) : (
        <PostList posts={cropPosts} />
      )}
    </>
  );
};

export default Posts;
