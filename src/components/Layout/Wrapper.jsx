import React, { Children } from "react";
import styled from "styled-components";
import { device } from "../../utils/device";

export default function Wrapper({ children }) {
  return <WrapperContainer>{children}</WrapperContainer>;
}

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    margin: 0 10vw;
  }
  @media ${device.laptop} {
    margin: 0 15vw;
  }
`;
