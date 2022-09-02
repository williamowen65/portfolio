import React from "react";
import styled from "styled-components";
import SidebarSVG from "./SidebarSVG";

export default function Right() {
  return (
    <RightStyled>
      <p>william.owen.dev@gmail.com</p>
      <SidebarSVG cName="altPosSVG" />
    </RightStyled>
  );
}

const RightStyled = styled.div`
  transform: rotate(90deg);
  display: flex;
  align-items: center;
  .altPosSVG {
    path {
      transform: rotate(-90deg);
    }
  }
`;
