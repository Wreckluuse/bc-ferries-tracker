import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";

function App() {
 return (
  //   <Router>
  //     <Routes>
  //       <Route exact path="/" component={Home} />
  //     </Routes>
  //   </Router>
    <Home />
  );
}

export default App;
