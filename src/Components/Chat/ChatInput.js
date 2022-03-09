import React, { useState } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { db } from "Backend/firebase";
import { doc, collection, addDoc, serverTimestamp } from "firebase/firestore";

function ChatInput({ channelId, channelName }) {
  const [input, setInput] = useState("");

  const sendMessage = async e => {
    e.preventDefault();

    if (!channelId) return false;

    const docRef = doc(db, "rooms", channelId);

    const colRef = collection(docRef, "messages");

    await addDoc(colRef, {
      message: input,
      timestamp: serverTimestamp(),
      user: "Desmond Oben",
      userImage:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFH8W6G3HIwWw/profile-displayphoto-shrink_800_800/0/1639987599445?e=1652313600&v=beta&t=io2Up2QwK9pdOQkuzVzfqx6e6J83YojDEiiJh8OzbRA",
    });

    // clear text
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder={`Message #${channelName ? channelName : "room"}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 68%;
    border: 1px solid gray;
    border-radius: 3px;
    outline: none;
    padding: 20px;
  }
  > form > button {
    display: none !important;
  }
`;
