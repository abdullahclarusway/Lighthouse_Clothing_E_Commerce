import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
