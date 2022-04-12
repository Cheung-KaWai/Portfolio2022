import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";

export default function Banner({ children }) {
  return (
    <BannerContainer>
      {children}
      <Shape></Shape>
    </BannerContainer>
  );
}

const BannerContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 10rem);
`;

const Shape = styled.div`
  right: 0;
  z-index: -5;
  background-color: ${colors.lightIndigo};
  width: 30rem;
  height: 30rem;
  flex-shrink: 0;
  border-radius: 41% 59% 20% 80% / 49% 67% 33% 51%;
`;
