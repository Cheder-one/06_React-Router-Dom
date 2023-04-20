import Home from "./components/navBar/home";
import Login from "./components/navBar/login";
import NavBar from "./components/navBar/navBar";
import { Route, Switch } from "react-router-dom";
import Posts from "./components/navBar/posts";
import Dashboard from "./components/navBar/dashboard";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
