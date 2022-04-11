import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <Navbar>
      <Menu>
        <MenuItem>Logo</MenuItem>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Learning Hub</MenuItem>
      </Menu>
    </Navbar>
  );
}

const Navbar = styled.nav`
  height: 7rem;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;
`;

const MenuItem = styled.li`
  list-style: none;
  font-size: 1.8rem;
  padding: 0 2rem;

  &:first-child {
    margin-right: auto;
  }
`;
