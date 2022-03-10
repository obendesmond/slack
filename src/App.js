import Chat from "Components/Chat";
import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Header } from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Chat />} />
        </Routes>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
