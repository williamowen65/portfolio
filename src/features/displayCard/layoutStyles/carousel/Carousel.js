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

import "./styles/index.css";
import styled from "styled-components";

const Carousel = React.memo(
  ({ title, cards }) => {
    // console.log("STATE ", useContext(AppControlContent));
    console.log(cards);
    const { test } = useSelector(
      (state) => state.carousel
    );

    const carousel = useRef();

    const screenWidth = useSelector(
      (state) => state.app.screenWidth
    );
    const Section = styled.section`
      max-width: calc(
        100% +
          ${configValues.breakpoints
            .mobile > screenWidth
            ? 29
            : 99}px
      );
      ${configValues.breakpoints
        .mobile < screenWidth
        ? "left: -49px"
        : "left: -20px"};
      ${configValues.breakpoints
        .mobile > screenWidth &&
      "padding-left: 18px"};
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
          {/* {cards.map((project) => (
              
        ))} */}

          <div className="cardContainer">
            <div className="card">
              <div className="slide one">
                <h3>sdfsdjfkl</h3>
                <p>dfhsljdflsdds</p>
              </div>
              <div className="slide two">
                <p>hsdfhsdlfhsdklhf</p>
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <div className="card">
              <div className="slide one">
                <h3>sdfsdjfkl</h3>
                <p>dfhsljdflsdds</p>
              </div>
              <div className="slide two">
                <p>hsdfhsdlfhsdklhf</p>
              </div>
            </div>
          </div>

          {/* offset the last card, maybe not necesary.. */}
          {/* <div className="spacer">|</div> */}
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

const CarouselStyled = styled.div`
  h1 {
    color: ${configValues.theme.dark
      .color.main};
  }
  header {
    border-bottom: 1px solid
      ${configValues.theme.dark.color
        .main};
  }
  path {
    stroke: ${configValues.theme.dark
      .color.main};
  }
`;
