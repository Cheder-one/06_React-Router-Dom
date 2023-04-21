import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/navigation/home";
import Login from "./components/navigation/login";
import NavBar from "./components/navigation/navBar";
import Posts from "./components/navigation/posts";
import Dashboard from "./components/navigation/dashboard";
import NotFound from "./components/redirect/notFound";

function App() {
  return (
    <>
      <NavBar />
      <div className="ms-3 mt-2">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard/stats" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/posts/:postId?" component={Posts} />
          {/* Если ничего не найдено то Redirect на путь /404 */}
          {/* Если мы перешли по path="/404" => отобразить Компонент */}
          <Route path="/404" component={NotFound} />
          <Redirect from="/admin" to="/dashboard" />
          <Redirect to="/404" />
        </Switch>
      </div>
    </>
  );
}

export default App;
