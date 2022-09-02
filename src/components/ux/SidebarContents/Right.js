import React from "react";
import styled from "styled-components";

export default function Right() {
  return (
    <RightStyled>
      <p>william.owen.dev@gmail.com</p>
    </RightStyled>
  );
}

const RightStyled = styled.div`
  transform: rotate(90deg);
`;
