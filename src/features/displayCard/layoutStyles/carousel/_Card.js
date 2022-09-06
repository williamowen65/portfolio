import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import CardItem from "./_CardItem";
import Close from "./assets/Close";
import Earth from "./assets/Earth";
import { useSelector } from "react-redux";

const Card = ({
  children,
  project,
  section,
}) => {
  const { detail, setDetail } =
    useSelector(
      (state) => state.carousel
    );

  // console.log(project);

  // const projectContext = useContext(ProjectContext);
  const { details, xAxisPos } = project;

  // console.log(detail);
  const card = useRef();
  const detailSection = useRef();

  // const [style, setStyle]

  const handleEnter = (type, e) => {
    e.stopPropagation();
    // e.persist();
    // console.log(e);
    card.current.classList.add(
      `active-${type}`
    );
    // console.log(card.current.children);
    if (
      `${project.props.id}_${project.props.title}` ===
      detail.id
    ) {
      return;
    } else {
      card.current.children[2].scrollTop = 0;
    }
    // console.log("toggle from card", type, card.current);
  };
  const handleLeave = (type) => {
    if (
      `${project.props.id}_${project.props.title}` ===
      detail.id
    ) {
      return;
    }
    card.current.classList.remove(
      `active-${type}`
    );
  };

  //Injects detail info in the form of html
  useEffect(() => {
    if (
      detailSection.current &&
      details
    ) {
      detailSection.current.innerHTML +=
        details;
    }
  }, [detailSection]);

  //open the details scroll
  const scrollFocus = (xAxis, e) => {
    // detailSection.current.scrollIntoView(false);
    // console.log("xaxispos: ", xAxisPos);
    // console.log(detail.openDetail);
    // console.log(e);
    const carousel =
      e.target.parentElement
        .parentElement.parentElement
        .parentElement;
    // console.log(carousel);
    // if (!detail.openDetail) {
    if (window.innerWidth < 500) {
      carousel.scrollTo({
        left: xAxisPos + 160,
        behavior: "smooth",
      });
    } else {
      carousel.scrollTo({
        left: xAxisPos - 10,
        behavior: "smooth",
      });
    }
    // }
  };

  // const close = useRef();
  useEffect(() => {
    let slideUp;
    if (
      detail.id !==
      `${project.props.id}_${project.props.title}`
    ) {
      // console.log(close.current);
      slideUp = setTimeout(() => {
        detailSection.current.scrollTop = 0;
      }, 1000);
    }
    return function cleanup() {
      clearTimeout(slideUp);
    };
    // console.log(detailSection);
  }, [detail]);

  const toggleDetails = (e) => {
    if (
      detail.id ===
      `${project.props.id}_${project.props.title}`
    ) {
      setDetail("", "");
    }
  };
  return (
    // Details Portion of card is wrapping the front of the card
    <div
      ref={card}
      // data-attr={project}
      className={
        detail.id ===
          `${project.props.id}_${project.props.title}` &&
        detail.openDetail === true
          ? "projectCard card active active-visit"
          : "projectCard card"
      }
      id={`_${project.props.id}`}
    >
      {/* <p>Test</p> */}
      <CardItem
        project={project}
        section={section}
        handleEnter={handleEnter}
        handleLeave={handleLeave}
        handleScroll={scrollFocus}
      />
      <Close
        project={project}
        detail={detail}
        toggleDetails={toggleDetails}
      />
      {/* <a href=''> */}
      {project.props.link !== null && (
        <Earth
          project={project}
          detail={detail}
        />
      )}
      {/* </a> */}

      <div
        style={{ whiteSpace: "nowrap" }}
        ref={detailSection}
        className="details"
        id={`${project.props.title}`}
      >
        {project.props.children}
      </div>
    </div>
  );
};

export default Card;
