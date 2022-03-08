import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import getAllDocuments from "Backend/getAllDocuments";

export default function SideBar() {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () => {
    await getAllDocuments("rooms", setRooms);
    console.log("Rooms: ", rooms);
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>iprissm HQ</h2>
          <h3>
            <FiberManualRecord />
            Desmond Inc
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>

      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />

      <hr />

      <SidebarOption Icon={ExpandMore} title="Channels" />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

      {rooms?.map(room => (
        <SidebarOption key={room.id} id={room.id} title={room.name} />
      ))}
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin: 10px 0 10px 0;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding-bottom: 10px;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
