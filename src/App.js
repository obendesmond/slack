import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<h1>This is the homepage</h1>} />
      </Routes>
    </div>
  );
}

export default App;
