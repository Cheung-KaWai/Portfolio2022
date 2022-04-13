import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { maxDevice } from "../../utils/device";

export default function Shape({ children, color, background }) {
  const top = Math.floor(Math.random() * (70 - 20) + 20);
  const right = Math.floor(Math.random() * (70 - 20) + 20);
  const bottom = Math.floor(Math.random() * (70 - 20) + 20);
  const left = Math.floor(Math.random() * (70 - 20) + 20);

  const radius = `${top}% ${100 - top}% ${bottom}% ${
    100 - bottom
  }% / ${left}% ${right}% ${100 - right}% ${100 - left}%`;

  return (
    <Blob radius={radius} color={color} background={background}>
      {children}
    </Blob>
  );
}

const orbit = keyframes`
  100%{
    transform: rotate(1turn);
  }
`;

const grow = keyframes`
  100%{
    transform: scale(1.2);
  }
`;

const jump = keyframes`
  100%{
    transform: translateY(-5rem);
  }
`;

const Blob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  background-color: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
  color: ${(props) => props.color};
  flex-shrink: 0;
  position: absolute;
  animation: ${grow} 1s ease-in-out infinite alternate;

  &:nth-child(1) {
    right: 2rem;

    & * {
      animation: ${orbit} 40s linear reverse infinite;
    }
  }
  &:nth-child(2) {
    top: 2rem;
    animation-delay: 250ms;
    & * {
      animation: ${orbit} 40s linear reverse infinite;
    }
  }
  &:nth-child(3) {
    bottom: 2rem;
    animation-delay: 500ms;
    & * {
      animation: ${orbit} 40s linear reverse infinite;
    }
  }
  &:nth-child(4) {
    left: 2rem;
    animation-delay: 750ms;
    & * {
      animation: ${orbit} 40s linear reverse infinite;
    }
  }

  @media ${maxDevice.laptopL} {
    position: relative;
    animation-play-state: paused;
    left: unset !important;
    top: unset !important;
    right: unset !important;
    bottom: unset !important;
    animation: ${jump} 1s ease-out infinite alternate;
  }

  @media ${maxDevice.laptop} {
    width: 6rem;
    height: 6rem;
  }
  @media ${maxDevice.mobileL} {
    width: 4rem;
    height: 4rem;
  }
`;
