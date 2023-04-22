import Stats from "./stats";
import Edit from "./edit";
import { Link, Route, Switch } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to={"/dashboard/edit"}>Edit</Link>
        </li>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      </ul>
      {/* Статистика будет открываться по-умолчанию */}
      <Switch>
        <Route path="/dashboard/edit" component={Edit} />
        <Route path="/dashboard/" component={Stats} />
      </Switch>
    </>
  );
};

export default Dashboard;
