import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Documentation from "./routes/Documentation";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "BC Ferries Tracker"
  },[])

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/documentation" component={Documentation} />
      </Switch>
    </main>
  );
}

export default App;
