import React from "react";
import styled from "styled-components";
import { BiArrowFromLeft } from "react-icons/bi";

export default function Card() {
  return (
    <CardStyled>
      <div className="card intro">
        <div className="slide">
          <p>
            Thanks for your interest.
          </p>
          <p>Scroll through</p>
          <BiArrowFromLeft size={30} />
        </div>
      </div>

      <div className="card">
        <div className="slide one">
          <h3>sdfsdjfkl</h3>
          <p>dfhsljdflsdds</p>
        </div>
        <div className="slide two">
          <p>hsdfhsdlfhsdklhf</p>
        </div>
      </div>
      <div className="card">
        <div className="slide one">
          <h3>sdfsdjfkl</h3>
          <p>dfhsljdflsdds</p>
        </div>
        <div className="slide two">
          <p>hsdfhsdlfhsdklhf</p>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
`;
