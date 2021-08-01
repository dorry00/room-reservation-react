import React from "react";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Errors from "./Pages/Errors";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Rooms exact path="/rooms" component={Rooms} />
        <SingleRoom exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
