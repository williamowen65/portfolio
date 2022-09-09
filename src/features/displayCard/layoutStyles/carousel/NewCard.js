import React from "react";
import styled from "styled-components";
import { BiArrowFromLeft } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
// import borderImg from "./assets/borderPattern.png";
// import borderImg2 from "./assets/borderPattern2.png";
// import borderImg2p1 from "./assets/borderPattern2.1.png";

import configValues from "../../../../data/configValues.json";
import FirstCard from "./data/kayak-to-web";
import SecondCard from "./data/dev-plans";
import ThirdCard from "./data/tour-guide";

export default function Card() {
  const kayakPic =
    "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/241370100_10223121600261531_6198239796508220196_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M_GbXTiAph4AX9J9wMK&_nc_ht=scontent-sea1-1.xx&oh=00_AT-_BMPLZDpX4cTrqOJm3BfrqHn3zbYpzFkGaBVC0SM-Vw&oe=631DCDE0";

  const webDevPic =
    "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/302085057_10225037046066479_347752878933419272_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ICVasttexKYAX8P4IM4&_nc_ht=scontent-sea1-1.xx&oh=00_AT_D84gdgQS9kdNuBTuwbWDqtJMvb-gO-XIGHhMJtk6PKg&oe=631E7305";

  return (
    <CardStyled>
      <div className="card intro">
        <div className="slide intro">
          <p>
            Tap the following cards to
            learn more
          </p>
        </div>
      </div>

      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  .card {
  }
`;
