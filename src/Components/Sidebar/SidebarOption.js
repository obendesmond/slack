import React, { useState } from "react";
import styled from "styled-components";
import { db } from "Backend/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "features/appSlice";
import ChannelDialog from "./ChannelDialog";

export default function SidebarOption({ Icon, title, addChannelOption, id }) {
  const [open, setOpen] = useState(false);
  const [channelInput, setChannelInput] = useState("");
  const dispatch = useDispatch();
  const roomName = "rooms";

  const handleClose = () => {
    setOpen(false);
  };

  const addChannel = async () => {
    setOpen(true);

    if (channelInput) {
      await addDoc(collection(db, roomName), {
        name: channelInput,
        timestamp: serverTimestamp(),
      });
      setOpen(false);
      setChannelInput("");
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };

  return (
    <>
      <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
      >
        {Icon && <Icon style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <span>#</span> &nbsp; {title}
          </SidebarOptionChannel>
        )}
      </SidebarOptionContainer>
      <ChannelDialog
        channelInput={channelInput}
        setChannelInput={setChannelInput}
        open={open}
        handleAddChannel={addChannel}
        handleClose={handleClose}
      />
    </>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div`
  padding: 10px 10px;
  font-weight: 300;
`;
