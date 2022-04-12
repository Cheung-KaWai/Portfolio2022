import React from "react";
import styled from "styled-components";
import { device } from "../../utils/device";

export default function Wrapper({ children }) {
  return <WrapperContainer>{children}</WrapperContainer>;
}

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media ${device.tablet} {
    margin: 0 10vw;
    padding: 0;
  }
  @media ${device.laptop} {
    margin: 0 15vw;
    padding: 0;
  }
`;
