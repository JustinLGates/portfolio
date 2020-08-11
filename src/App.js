import React from "react";
import logo from "./logo.svg";
import "./App.css";
import me from "./me.jpg";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Software Developer Justin Gates</h1>
          </div>
        </div>

        <div className="col-12 p-0 m-0 m-auto d-flex justify-content-center">
          <div className="picContainer">
            <img className="myPic" src={me} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
