import React from "react";
import styled from "styled-components";
import { BiArrowFromLeft } from "react-icons/bi";
import borderImg from "./assets/borderPattern.png";

export default function Card() {
  const kayakPic =
    "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/241370100_10223121600261531_6198239796508220196_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M_GbXTiAph4AX9J9wMK&_nc_ht=scontent-sea1-1.xx&oh=00_AT-_BMPLZDpX4cTrqOJm3BfrqHn3zbYpzFkGaBVC0SM-Vw&oe=631DCDE0";

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
          <h3>
            From Kayak Guide to Web
            Developer
          </h3>
          <img
            className="coverPhoto"
            src={kayakPic}
            alt=""
          />
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
  .card {
    /* border: 30px solid transparent; */
    border-image: url(${borderImg}) 3000
      round !important;
  }
`;
