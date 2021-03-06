import React from "react";
import { Avatar, Tooltip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import styled from "styled-components";
import useAuth from "hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "Backend/firebase";

export const Header = () => {
  const { currentUser } = useAuth();
  return (
    <HeaderContainer>
      {/* header left */}
      <HeaderLeft>
        <Tooltip title="Sign Out" arrow>
          <HeaderAvatar
            // TODO: Add onclick
            onClick={() => signOut(auth)}
            src={currentUser?.photoURL}
            alt={currentUser?.displayName}
          />
        </Tooltip>
        <AccessTimeIcon />
      </HeaderLeft>

      {/* header search (middle) */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="search the desmond slack" />
      </HeaderSearch>

      {/* header right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;
  > input {
    border: none;
    background-color: transparent;
    text-align: center;
    min-width: 30vw;
    color: white;
    outline: none;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
