import React from "react";
import styled from "styled-components";
import {
  BsMedium,
  BsGithub,
} from "react-icons/bs";
import { FiCodepen } from "react-icons/fi";
import configValues from "../../../data/configValues.json";
import SidebarSVG from "./SidebarSVG";

export default function Left() {
  return (
    <>
      <BsMedium
        size={30}
        color={
          configValues.theme.dark.color
            .main
        }
      />
      <BsGithub
        size={30}
        color={
          configValues.theme.dark.color
            .main
        }
      />
      <FiCodepen
        size={30}
        color={
          configValues.theme.dark.color
            .main
        }
      />
      <SidebarSVG />
    </>
  );
}

const LeftStyled = styled.div``;
