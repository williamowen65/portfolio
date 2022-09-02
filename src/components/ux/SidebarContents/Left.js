import React from "react";
import styled from "styled-components";
import {
  BsMedium,
  BsGithub,
} from "react-icons/bs";
import { FiCodepen } from "react-icons/fi";
import configValues from "../../../data/configValues.json";
import SidebarSVG from "./SidebarSVG";
import "./styles/index.css";

const icons = "iconsSVG";

export default function Left() {
  return (
    <LeftStyled>
      <BsMedium
        size={30}
        color={
          configValues.theme.dark.color
            .main
        }
        className={icons}
        onClick={() => {
          window.open(
            "https://medium.com/@william.owen.dev",
            "_blank"
          );
        }}
      />
      <BsGithub
        size={30}
        color={
          configValues.theme.dark.color
            .main
        }
        className={icons}
        onClick={() => {
          window.open(
            "https://github.com/williamowen65",
            "_blank"
          );
        }}
      />
      <FiCodepen
        size={30}
        color={
          configValues.theme.dark.color
            .main
        }
        className={icons + " stroke"}
        onClick={() => {
          window.open(
            "https://codepen.io/williamowen65",
            "_blank"
          );
        }}
      />
      <SidebarSVG />
    </LeftStyled>
  );
}

const LeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg.iconsSVG {
    transition: all 0.5s;
    &:hover {
      &:not(.stroke) {
        fill: ${configValues.theme.dark
          .color.highlight};
      }
      &.stroke {
        stroke: ${configValues.theme
          .dark.color.highlight};
      }
      transform: translateY(-3px);
    }
  }
`;
