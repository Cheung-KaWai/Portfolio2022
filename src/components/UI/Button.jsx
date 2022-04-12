import React from "react";
import styled from "styled-components";

export default function Button({ text, className }) {
  return <ButtonComponent className={className}>{text}</ButtonComponent>;
}

const ButtonComponent = styled.button`
  padding: 0.5em 2em;
  border-radius: 3px;
  font-size: 1.8rem;

  cursor: pointer;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.1);
  }
`;
