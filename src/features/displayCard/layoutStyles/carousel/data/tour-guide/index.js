import React, {
  useEffect,
} from "react";
import styled from "styled-components";
import {
  HiArrowNarrowRight,
  HiArrowNarrowDown,
} from "react-icons/hi";
import configValues from "../../../../../../data/configValues.json";
import { useRef } from "react";
import { GrClose } from "react-icons/gr";
import markdown from "./markdown.md";
import ConvertStringToHTML from "../../../../../../utils/stringToHTML";
import { useSelector } from "react-redux";

// console.log(markdown);
// import { Remarkable } from "remarkable";

// const md = new Remarkable();

// console.log(md.render(markdown));

export default function FirstCard() {
  const screenWidth = useSelector(
    (state) => state.app.screenWidth
  );

  const kayakPic =
    "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/241370100_10223121600261531_6198239796508220196_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M_GbXTiAph4AX9J9wMK&_nc_ht=scontent-sea1-1.xx&oh=00_AT-_BMPLZDpX4cTrqOJm3BfrqHn3zbYpzFkGaBVC0SM-Vw&oe=631DCDE0";

  const webDevPic =
    "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/302085057_10225037046066479_347752878933419272_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ICVasttexKYAX8P4IM4&_nc_ht=scontent-sea1-1.xx&oh=00_AT_D84gdgQS9kdNuBTuwbWDqtJMvb-gO-XIGHhMJtk6PKg&oe=631E7305";

  const slideOne = useRef();
  const slideTwo = useRef();

  const handleClick = (e) => {
    e.stopPropagation();
    // slideTwo.current.classList.toggle(
    //   "active"
    // );

    if (
      parseInt(
        slideTwo.current.style.height
      )
    ) {
      slideTwo.current.style.height = 0;
    } else {
      const slideOneHeight =
        getComputedStyle(
          slideOne.current
        ).height;
      slideTwo.current.style.height =
        slideOneHeight;
    }
  };

  useEffect(() => {
    if (slideTwo.current) {
      slideTwo.current.querySelector(
        ".content"
      ).innerHTML = markdown;
    }
  }, [slideTwo.current]);

  const ContentStyled = styled.div`
    ${screenWidth <
      configValues.breakpoints.mobile &&
    `flex-direction: column;
      height: 475px;
    `}
  `;

  const CardStyled = styled.div`
    .slide.one {
      background-size: 116% !important;
      background-position: 97% 0% !important;
      background-image: url("https://sanjuan.objects.liquidweb.services/photos/aerial_of_friday_harbor_with_ferry_san_juan_island_photography_by_unknown_0-1200x800.jpg") !important;
    }
  `;

  return (
    <CardStyled>
      <div
        className="card"
        // ref={}
      >
        <div
          className="slide one"
          onClick={handleClick}
          ref={slideOne}
        >
          <h3>
            {/* A Glimpse Into my Mind */}
            Thought's on Kayak Guiding
          </h3>
          <ContentStyled className="content">
            {/* fgfd */}
          </ContentStyled>
          <p>
            What floating among the kelp
            taught me
          </p>
          {/* <button>Learn More</button> */}
        </div>

        <div
          className="slide two"
          ref={slideTwo}
        >
          <GrClose
            size={30}
            className="close"
            onClick={handleClick}
          />
          <div className="content"></div>
        </div>
      </div>
    </CardStyled>
  );
}
