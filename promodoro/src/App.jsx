import { React, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <div className="wrapper">
        <h1 className="header">Promodoro Timer</h1>
        <div className="timersWrapper">
          <div className="primaryTimer">
            <Timer time={"25:00"} />
          </div>

          <div className="breakTimer">
            <Timer time={"05:00"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
