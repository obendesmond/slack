import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectRoomId } from "features/appSlice";
import ChatInput from "./ChatInput";
import getDocument from "Backend/getDocument";
import getAllDocuments from "Backend/getAllDocuments";
import Message from "./Message";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
    getDocument(roomId, "rooms", setRoomDetails, setLoading);
    getAllDocuments(
      `rooms/${roomId}/messages`,
      setRoomMessages,
      {
        name: "timestamp",
        value: "asc",
      },
      setLoading
    );
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && (
        <>
          {/* chat header */}
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.name}-room</strong>
              </h4>
              <StarBorderOutlined />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlined /> Details
              </p>
            </HeaderRight>
          </Header>

          {/* chat messages */}
          <ChatMessages>
            {roomMessages?.map(rm => (
              <Message
                key={rm.id}
                message={rm.message}
                timestamp={rm.timestamp}
                user={rm.user}
                userImage={rm.userImage}
              />
            ))}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.name}
            channelId={roomId}
          />
        </>
      )}

      {!roomDetails && (
        <NoRoomSelected>
          <h2>Please Select a Room</h2>
        </NoRoomSelected>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 5px;
  }
`;

const ChatMessages = styled.div``;

const NoRoomSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
