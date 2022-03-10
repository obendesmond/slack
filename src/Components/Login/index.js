import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import { auth } from "Backend/firebase";
import { provider } from "Backend/firebase";

function Login() {
  const signIn = e => {
    e.preventDefault();
    signInWithPopup(auth, provider).catch(err => console.log(err.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
          alt="slack logo"
        />
        <h1>Sign in to Desmond Slack</h1>
        <p>desmond.slack.com</p>
        <Button
          onClick={signIn}
          variant="contained"
          style={{ marginTop: "20px" }}
        >
          Sign in With Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contained;
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit;
    color: white;
  }
`;
