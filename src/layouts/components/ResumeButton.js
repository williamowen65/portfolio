import React from "react";
import styled from "styled-components";
import configValues from "../../data/configValues.json";

export default function Name() {
  return (
    <ResumeButton
      href="/William_Owen_Resume.pdf"
      download="WilliamOwenResume"
      className="resumeButton"
    >
      Resume
    </ResumeButton>
  );
}

const ResumeButton = styled.a`
    border-radius: 5px;
    padding: 7px 10px;
    margin: 6px;
    transition: all 0.5s;
  /* .resumeButton { */
  /* border: 1px solid ${
    configValues.theme.dark.color
      .highlight
  }; */
  width: fit-content !important;
  color: ${
    configValues.theme.dark.color
      .highlight
  };
  box-shadow: 1px 1px 2px #c193c1,
    -1px 1px 2px #ad37ad,
    0px -1px 2px #5fcf19;
  transition: box-shadow 1s;

  @mixin BoxShadowColors {
    box-shadow: 0px -1px 2px #5fcf19,
      1px 1px 2px #c193c1,
      -1px 1px 3px #ad37ad,
      6px -9px 2px #5fcf19,
      -6px 8px 2px #c193c1;
  }

  &:hover {
    /* @include BoxShadowColors; */
    box-shadow: 0px -1px 2px #5fcf19,
      1px 1px 2px #c193c1,
      -1px 1px 3px #ad37ad,
      6px -9px 2px #5fcf19,
      -6px 8px 2px #c193c1;
  }
  }
  /* @media #{$sma} */
  
  &:focus,
  &:visited {
    ${
      window.innerWidth >
        configValues.breakpoints
          .mobile &&
      `
    box-shadow: blue
  `
    }
`;
