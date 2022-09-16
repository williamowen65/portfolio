import React from "react";
import styled from "styled-components";

export default function Window() {
  return (
    <WindowStyled className="intersectionObserverWindow"></WindowStyled>
  );
}

const WindowStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
