import React, {
  useEffect,
  useRef,
} from "react";
import styled from "styled-components";
import configValues from "../../data/configValues.json";
import { useSelector } from "react-redux";
import { BsArrowDown } from "react-icons/bs";
import * as d3 from "d3";

export default function Sidebar({
  left,
  right,
  children,
}) {
  const screenWidth = useSelector(
    (state) => state.app.screenWidth
  );

  const SidebarStyled = styled.div`
    /* display: ${configValues
      .breakpoints.mainWidth >
    screenWidth
      ? "none"
      : "flex"}; */
    display: flex;
    ${right && "order:3"};
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 100vh;
    position: sticky;
    top: 0;
    flex-direction: column;
    align-items: center;
    svg {
      overflow: visible;
    }
  `;

  return (
    <SidebarStyled className="sidebarContent">
      {children}
    </SidebarStyled>
  );
}
