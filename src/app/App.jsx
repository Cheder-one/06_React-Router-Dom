import { Route, Switch } from "react-router-dom";
import Home from "./components/navigation/home";
import Login from "./components/navigation/login";
import NavBar from "./components/navigation/navBar";
// import Posts from "./components/posts";
import Dashboard from "./components/navigation/dashboard";
import PostList from "./components/postsList";
import Post from "./components/post";

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/stats" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route
          path="/posts/:postId"
          render={(props) => <Post {...props} posts={posts} />}
        />
        <Route
          path="/posts"
          render={(props) => <PostList {...props} posts={posts} />}
        />
      </Switch>
    </>
  );
}

export default App;
