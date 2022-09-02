import React from "react";
import styled from "styled-components";
import SidebarSVG from "./SidebarSVG";
import configValues from "../../../data/configValues.json";

export default function Right() {
  return (
    <RightStyled>
      <a href="mailto:william.owen.dev@gmail.com">
        <p>
          william.owen.dev@gmail.com
        </p>
      </a>
      <SidebarSVG cName="altPosSVG" />
    </RightStyled>
  );
}

const RightStyled = styled.div`
  transform: rotate(90deg);
  display: flex;
  align-items: center;
  p {
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      transform: translateX(-3px);
      color: ${configValues.theme.dark
        .color.highlight};
    }
  }
  .altPosSVG {
    path {
      transform: rotate(-90deg);
    }
  }
`;
