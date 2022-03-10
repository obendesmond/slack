import React, { useEffect, useState } from "react";
import Chat from "Components/Chat";
import useAuth from "hooks/useAuth";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Header } from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Login from "Components/Login";
import Spinner from "react-spinkit";

function App() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  const Load = () => (
    <AppLoading>
      <AppLoadingContents>
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
          alt="slack logo"
        />
        <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
      </AppLoadingContents>
    </AppLoading>
  );

  return (
    <div className="app">
      {loading && <Load />}
      {!currentUser ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
