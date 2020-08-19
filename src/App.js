import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Projects />
    </div>
  );
}

export default App;
