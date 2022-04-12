import React from "react";
import Template from "../../components/Layout/Template";
import Intro from "../../components/Home/Introduction";
import Button from "../../components/UI/Button";
import styled from "styled-components";
import { colors } from "../../utils/colors";

export default function Home() {
  return (
    <Template>
      <Intro />
      <GreenButton text="See Projects" />
    </Template>
  );
}

const GreenButton = styled(Button)`
  background-color: ${colors.lightGreen};
  color: ${colors.darkGreen};

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
