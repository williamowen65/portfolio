import React, {
  useRef,
  useState,
  Fragment,
  useEffect,
  useContext,
} from "react";
import AppControlContent from "./context/global/appControl/appControlContext";
import ProjectControlContext from "./context/global/projects/projectContext";
import configValues from '../../../../data/configValues.json'

// import AppControlContent from "./context/global/appControl/appControlContext";
import Card from "./Card";
import { useSelector } from 'react-redux'
import { store } from './context/store.js'
import { Provider } from 'react-redux'
import { allCards } from "./randomData/CardArchive";

import LeftArrow from "./assets/LeftArrow";
import RightArrow from "./assets/RightArrow";

import './styles/carousel.css'
import ProjectsState from "./context/global/projects/ProjectsState.js";
import AppControlState from "./context/global/appControl/AppControlState.js";
import styled from "styled-components";


const Carousel = ({ title, cards }) => {

  // console.log("STATE ", useContext(AppControlContent));

  const appControlContext = useContext(AppControlContent);
  const { detail, carouselScrollNoTouch } = appControlContext;
  const projectControlContext = useContext(ProjectControlContext);
  // const { projects } = useSelector();
  const carousel = useRef();

  const carouselData = useSelector(state => state.carousel)

  // console.log(carouselData);

  // let cardLengthPercent;
  // useEffect(() => {
  //   cardLengthPercent = carousel.current.scrollWidth / cards.length;
  //   for (let i = 0; i < cards.length; i++) {
  //     cards[i]. = cardLengthPercent * i;
  //   }
  // }, [cards, detail]);

  const scroll = (dir, e) => {
    // console.log("hi");
    // console.log(carousel.current, projects.length);
    const carouselSlider =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.nextSibling;
    // console.log(carouselSlider, e);
    if (dir > 0) {
      // console.log("hi");
      carouselSlider.scrollTo({
        left:
          carousel.current.scrollLeft +
          carousel.current.scrollWidth / cards.length,
        behavior: "smooth",
      });
    } else {
      carouselSlider.scrollTo({
        left:
          carousel.current.scrollLeft -
          carousel.current.scrollWidth / cards.length,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    var e, posX, posY, trackPos;

    if (
      carouselScrollNoTouch.dragging &&
      carouselScrollNoTouch.section === title &&
      carouselScrollNoTouch.dragging
    ) {
      trackPos = setInterval(() => {
        // console.log(carouselScrollNoTouch.mousePos);
        // carousel.current.scrollLeft = carouselScrollNoTouch.mousePos[0];
      }, 60);
      // console.log("hi");
      // clearInterval(trackPos);
    } else if (!carouselScrollNoTouch.dragging) {
      clearInterval(trackPos);
    }
    //   while (drag == true) {
    // e = window.event;

    // posX = e.clientX;
    // posY = e.clientY;
    // // }
    // console.log(posX, posY, e);

    //   // console.log($("html"));
    //   ///get the mouse position, track it while true. apply it to scroll bar
  }, [carouselScrollNoTouch]);

  return (
    <CarouselStyled className='carousel sidenavTarget' data-name={title.replace(" ", "-")}>
      <header>
        <div className='small-container'>
          <h1>{title}</h1>
          <p>
            <span>
              {/* <i className='material-icons'>chevron_left</i> */}
              <LeftArrow scroll={scroll} />
            </span>
            <span>
              {/* <i className='material-icons'>chevron_right</i> */}
              <RightArrow scroll={scroll} />
            </span>
          </p>
        </div>
      </header>
      <section
        ref={carousel}
        // onScroll={(e) => handleScroll("both")}
        // handlescroll={scrollBool ? "both" : ""}
        className='carouselSlider'
      >
        {/* {projects.map((project) => (
          <Card key={project.id} project={project} section={title}></Card>
        ))} */}
        {cards.map((project) => (
          <Card key={project.props.id} project={project} section={title}></Card>
        ))}
        {/* offset the last card, maybe not necesary.. */}
        <div className='spacer'>|</div>
      </section>
      <div id={title.replace(" ", "-")} className='sidenavAnchor'></div>
    </CarouselStyled>
  );
};


const Wrapper = (props) => (
  <ProjectsState>
    <AppControlState>

      <Provider store={store}>
        <Carousel {...props} />
      </Provider>
    </AppControlState>
  </ProjectsState>
)


export default Wrapper;


const CarouselStyled = styled.div`
  h1{
    color: ${configValues.theme.dark.color.main}
  }
`