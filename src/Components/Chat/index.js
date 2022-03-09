import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectRoomId } from "features/appSlice";
import ChatInput from "./ChatInput";
import getDocument from "Backend/getDocument";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect(() => {
    getDocument(roomId, "rooms", setRoomDetails);
  }, [roomId]);

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
          <ChatMessages>{/* TODO:list out the messages */}</ChatMessages>

          <ChatInput channelName={roomDetails?.name} channelId={roomId} />
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
