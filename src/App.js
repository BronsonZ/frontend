import NavBar from "./components/navBar";
import Home from "./components/home";
import NewPost from "./components/createPost";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UsersPosts from "./components/usersPosts";
import NotFound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <NewPost />
            </Route>
            <Route exact path="/users/:username">
              <UsersPosts />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
