import React from "react";
import styled from "styled-components";
import Shape from "../UI/Shape";
import { keyframes } from "styled-components";

export default function Banner({ children }) {
  return (
    <BannerContainer>
      {children}
      <LanguagesContainer>
        <Shape background="#fff0f6" color="#f783ac">
          <ion-icon name="logo-html5"></ion-icon>
        </Shape>
        <Shape background="#f3f0ff" color="#9775fa">
          <ion-icon name="logo-css3"></ion-icon>
        </Shape>
        <Shape background="#e3fafc" color="#3bc9db">
          <ion-icon name="logo-react"></ion-icon>
        </Shape>
        <Shape background="#fff9db" color="#ffd43b">
          <ion-icon name="logo-javascript"></ion-icon>
        </Shape>
      </LanguagesContainer>
    </BannerContainer>
  );
}

const BannerContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 10rem);
`;

const orbit = keyframes`
  100%{
    transform: rotate(1turn);
  }
`;

const LanguagesContainer = styled.div`
  flex-shrink: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 40rem;
  animation: ${orbit} 40s linear infinite;
  transform-origin: center;

  &:hover {
    animation-play-state: paused;
  }
`;
