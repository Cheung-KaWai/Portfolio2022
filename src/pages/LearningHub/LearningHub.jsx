import React from "react";
import Template from "../../components/Layout/Template";
import styled from "styled-components";

export default function LearningHub() {
  return (
    <Template>
      <CanvasContainer></CanvasContainer>
    </Template>
  );
}

const CanvasContainer = styled.div`
  height: 50rem;
  background-color: #f4fce3;
`;
