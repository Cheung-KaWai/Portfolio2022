import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { colors } from "../../utils/colors";
import { sizes } from "../../utils/sizes";

export default function Introduction() {
  return (
    <Intro>
      Hi, my name is Ka Wai cheung.
      <br /> I'm a student <br /> <Highlight>Web & Mobile </Highlight>
      development <Blob>:D</Blob>
    </Intro>
  );
}

const Intro = styled.h1`
  font-family: "Grape Nuts", cursive, sans-serif;
  font-size: ${sizes.h1};
`;

const slide = keyframes`
  0%{background-position:right}
  100%{background-position: left}
`;

const bounce = keyframes`
  0%{background-size:0% 0%}
  50%{background-size: 130% 130%}
  60%{background-size: 100% 100%}
  70%{background-size: 120% 120%}
  80%{background-size: 100% 100%}
  90%{background-size: 110% 110%}
  100%{background-size: 100% 100%}
`;

const Highlight = styled.span`
  background: linear-gradient(-60deg, #fff 50%, ${colors.lightGreen} 50% 100%);
  background-size: 160% 200%;
  animation: ${slide};
  animation-timing-function: ease-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

const Blob = styled.span`
  padding: 0.5em;
  background-image: url(/img/blob.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-size: 0% 0%;
  animation: ${bounce};
  animation-timing-function: ease-out;
  animation-delay: 1s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;
