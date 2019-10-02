import React from "react";
import Header from "./components/header.js";
import MemeGenerator from "./components/memeGenerator.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
