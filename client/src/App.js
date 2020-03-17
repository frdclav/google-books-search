
import React from "react";
import Saved from "./Components/Saved";
import Search from "./Components/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (

    <Router>

      <Switch>
        <Route exact path="/">

          <Search />

        </Route>
        <Route exact path="/saved">

          <Saved />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
