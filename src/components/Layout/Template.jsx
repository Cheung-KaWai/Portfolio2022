import React from "react";
import Wrapper from "./Wrapper";
import Nav from "../Navigation/Nav";

export default function Template({ children }) {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
}
