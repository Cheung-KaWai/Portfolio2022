import React from "react";
import styled from "styled-components";
import Introduction from "./Introduction";
import Languages from "./Languages";
import { colors } from "../../utils/colors";
import Button from "../UI/Button";
import { maxDevice } from "../../utils/device";

export default function Banner({ children }) {
  return (
    <BannerContainer>
      <FlexH>
        <Introduction />
        <GreenButton text="See Projects" />
      </FlexH>
      <Languages />
    </BannerContainer>
  );
}

const BannerContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 10rem);

  @media ${maxDevice.laptopL} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-start;
  }
`;

const GreenButton = styled(Button)`
  background-color: ${colors.lightGreen};
  color: ${colors.darkGreen};
  align-self: flex-start;
  &::after {
    content: "\\2192";
    position: relative;
    padding-left: 1rem;
    font-weight: 600;
    transition: all 300ms ease;
    left: 0;
  }

  &:hover {
    &::after {
      left: 1rem;
    }
  }
`;

const FlexH = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
