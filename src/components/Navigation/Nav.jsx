import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Navbar>
      <Menu>
        <MenuItem>
          <Link to="/">Logo</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/#about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/learninghub">Learning Hub</Link>
        </MenuItem>
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
