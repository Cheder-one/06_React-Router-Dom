import { Route, Switch } from "react-router-dom";
import Home from "./components/navigation/home";
import Login from "./components/navigation/login";
import NavBar from "./components/navigation/navBar";
import Posts from "./components/navigation/posts";
import Dashboard from "./components/navigation/dashboard";

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
          path="/posts/:postId?"
          render={(props) => <Posts {...props} />}
        />
      </Switch>
    </>
  );
}

export default App;
