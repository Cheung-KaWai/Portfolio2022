import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { maxDevice } from "../../utils/device";
import { margins } from "../../utils/margin";
import { sizes } from "../../utils/sizes";

export default function Introduction() {
  return (
    <Intro>
      Hi, my name is Ka Wai cheung.
      <IntroLowerFont>
        <br /> I'm a student <br /> Web & Mobile development <Blob>:D</Blob>
      </IntroLowerFont>
    </Intro>
  );
}

const Intro = styled.h1`
  font-family: "Gloria Hallelujah", cursive;
  font-size: ${sizes.h1};
  line-height: 1.2;
  margin-bottom: ${margins.large};
  @media ${maxDevice.laptop} {
    font-size: ${sizes.h1sm};
    margin-bottom: ${margins.medium};
  }
  @media ${maxDevice.mobileL} {
    font-size: ${sizes.h1xsm};
  }
`;

const IntroLowerFont = styled.span`
  font-size: ${sizes.h2};
  @media ${maxDevice.laptop} {
    font-size: ${sizes.h2sm};
  }
  @media ${maxDevice.mobileL} {
    font-size: ${sizes.h2xsm};
  }
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

const Blob = styled.span`
  padding: 0.8em;
  background-image: url(/img/blob.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-size: 0% 0%;
  animation: ${bounce};
  animation-timing-function: ease-out;
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;
