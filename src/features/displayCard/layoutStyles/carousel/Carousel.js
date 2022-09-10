import React, {
  useRef,
  useState,
  Fragment,
  useEffect,
} from "react";
import configValues from "../../../../data/configValues.json";

import { useSelector } from "react-redux";
import { store } from "../../../../context/store";
import { Provider } from "react-redux";

import LeftArrow from "./assets/LeftArrow";
import RightArrow from "./assets/RightArrow";
import { BsDot } from "react-icons/bs";

import { BiArrowFromLeft } from "react-icons/bi";

import "./styles/index.css";
import styled from "styled-components";
import Card from "./NewCard";

const Carousel = React.memo(
  ({ title, cards }) => {
    // console.log("STATE ", useContext(AppControlContent));
    // console.log(cards);
    // const { test } = useSelector(
    //   (state) => state.carousel
    // );

    const carousel = useRef();

    const screenWidth = useSelector(
      (state) => state.app.screenWidth
    );
    const Section = styled.section`
      max-width: calc(
        100% +
          ${configValues.breakpoints
            .mobile > screenWidth
            ? 37
            : 99}px
      );
      ${configValues.breakpoints
        .mobile < screenWidth
        ? "left: -49px;"
        : "left: -20px;"};
      ${configValues.breakpoints
        .mobile > screenWidth &&
      "padding-left: 18px;"};
    `;

    const CarouselStyled = styled.div`
      h1 {
        color: ${configValues.theme.dark
          .color.main};
      }
      header {
        border-bottom: 1px solid
          ${configValues.theme.dark
            .color.main};
      }
      path {
        stroke: ${configValues.theme
          .dark.color.main};
      }
      .carouselSlider {
        ${screenWidth <
          configValues.breakpoints
            .mobile &&
        `height: 475px !important;`}
      }
      .slide:not(.two) {
        ${screenWidth <
          configValues.breakpoints
            .mobile &&
        `height: 411px !important;`}
      }
      .imgContainer {
        ${screenWidth <
          configValues.breakpoints
            .mobile &&
        `
           width: 120px !important; 
           height: 120px !important;   
            `}
      }
      .iframeContainer {
        width: ${screenWidth <
        configValues.breakpoints.mobile
          ? `
         100%   
            `
          : `85%`} !important;
      }
    `;

    return (
      <CarouselStyled
        className="carousel sidenavTarget"
        data-name={title.replace(
          " ",
          "-"
        )}
      >
        <header>
          <div className="small-container">
            <h2>{title}</h2>
            <p>
              <span>
                {/* <i className='material-icons'>chevron_left</i> */}
                <LeftArrow
                  scroll={scroll}
                />
              </span>
              <BsDot size={30} />
              <span>
                {/* <i className='material-icons'>chevron_right</i> */}
                <RightArrow
                  scroll={scroll}
                />
              </span>
            </p>
          </div>
        </header>
        <Section
          ref={carousel}
          className="carouselSlider"
        >
          <Card />
        </Section>
      </CarouselStyled>
    );
  }
);

const Wrapper = (props) => (
  <Provider store={store}>
    <Carousel {...props} />
  </Provider>
);

export default Wrapper;
