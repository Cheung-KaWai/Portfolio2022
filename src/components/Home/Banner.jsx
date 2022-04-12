import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";

export default function Banner({ children }) {
  return (
    <BannerContainer>
      {children}
      <Shape>
        <ion-icon name="logo-html5"></ion-icon>
        <ion-icon name="logo-css3"></ion-icon>
        <ion-icon name="logo-react"></ion-icon>
        <ion-icon name="logo-javascript"></ion-icon>
      </Shape>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;
