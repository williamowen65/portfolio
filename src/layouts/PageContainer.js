import React from "react";
import styled from "styled-components";
import configValues from "../data/configValues.json";

export default function PageContainer({
  children,
  width,
}) {
  return (
    <Div
      id="pageContainer"
      width={width}
    >
      {children}
    </Div>
  );
}

const Div = styled.div`
  max-width: ${configValues.breakpoints
    .mainWidth}px;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: -1px 0px 34px yellow;
  ${(props) =>
    props.width <
      configValues.breakpoints.mobile &&
    `
        min-width: 30px;
      `}
`;
