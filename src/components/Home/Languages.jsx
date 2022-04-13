import React from "react";
import styled from "styled-components";
import Shape from "../UI/Shape";
import { keyframes } from "styled-components";
import { maxDevice } from "../../utils/device";
import { margins } from "../../utils/margin";

export default function Languages() {
  return (
    <LanguagesContainer>
      <Shape background="#fff0f6" color="#f783ac">
        <ion-icon name="logo-html5"></ion-icon>
      </Shape>
      <Shape background="#f3f0ff" color="#9775fa">
        <ion-icon name="logo-css3"></ion-icon>
      </Shape>
      <Shape background="#fff9db" color="#ffd43b">
        <ion-icon name="logo-javascript"></ion-icon>
      </Shape>
      <Shape background="#e3fafc" color="#3bc9db">
        <ion-icon name="logo-react"></ion-icon>
      </Shape>
    </LanguagesContainer>
  );
}

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
  width: 37rem;
  height: 37rem;
  animation: ${orbit} 40s linear infinite;
  transform-origin: center;

  &:hover {
    animation-play-state: paused;
  }

  @media ${maxDevice.laptopL} {
    flex-shrink: 1;
    animation: none;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    gap: 3rem;
    margin-bottom: ${margins.small};
  }
`;
