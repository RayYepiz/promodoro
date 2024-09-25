import { React, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="timersWrapper">
      <Timer time={"25:00"} />
      <Timer time={"05:00"} />
    </div>
  );
}

export default App;
