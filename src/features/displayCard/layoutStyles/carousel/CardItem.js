import React, { useContext, useEffect, useRef, useState } from "react";
import AppControlContext from "./context/global/appControl/appControlContext";


// import Info from "../Icons/Info";

const CardItem = ({
  project,
  section,
  // handlescroll,
  handleEnter,
  handleLeave,
  handleScroll,
}) => {
  const appControlContext = useContext(AppControlContext);
  const { detail, setDetail, setCarouselScrollNoTouch } = appControlContext;


  const cardContent = useRef();
  const el = document.createElement("p");

  const [opened, setOpened] = useState(false);

  const [styles, setStyles] = useState({});
  const visitLink = useRef();

  /// Adjust individual photos from the context
  useEffect(() => {

    // helps touch screen not right click,, on laptop touch
    if (opened) {
      visitLink.current.addEventListener("contextmenu", (event) =>
        event.preventDefault()
      );
    }
  }, []);

  const toggleDetails = (e) => {
    // console.log(e);
    if (detail.id === `${project.props.id}_${project.props.title}`) {
      setDetail("", "");
      setOpened(false);
    } else {
      setDetail(project.props.id, project.props.title);
      setOpened(true);
    }
    // console.log(detail, project.props.id);
    handleScroll(project.props.xAxisPos, e);
    // console.log("toggle");
    setTimeout(() => {
      // console.log(detail, project.props.id);
      if (
        !detail.openDetail ||
        detail.id !== `${project.props.id}_${project.props.title}`
      ) {
        handleEnter("visit", e);
      }
    }, 1);
  };

  const [drag, setDrag] = useState(false);
  const [pos, setPos] = useState([0, 0]);

  const handleMouseDown = () => {
    let e = window.event;
    let posX, posY;
    posX = e.clientX;
    posY = e.clientY;
    setPos([posX, posY]);
    // console.log(posX, posY);

    setCarouselScrollNoTouch({
      section: section,
      mousePos: [posX, posY],
      dragging: true,
    });
  };

  const handleMouseUp = () => {
    setCarouselScrollNoTouch({
      section: "",
      mousePos: [],
      dragging: false,
    });
  };

  const title = useRef();
  useEffect(() => {
    title.current.innerHTML = project.props.title;
  }, []);
  // console.log(project);
  return (
    <div className='projectCard' onClick={toggleDetails}>
      <picture>
        <img
          src={project.props.imgSrc.props.src}
          style={{
            objectFit: 'cover',
            height: '100%',
            ...project.props.imgSrc.props.style
          }}
          alt='#'
          onClick={toggleDetails}
          // onMouseDown={() => setDrag(true)}
          // onMouseUp={() => setDrag(false)}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </picture>
      <div
        className='card'
        onClick={toggleDetails}
      // onMouseDown={() => setDrag(true)}
      // onMouseUp={() => setDrag(false)}
      >
        <p className='card-title' ref={title}>
          {project.props.title}
        </p>
        <div className='card-content' >
          {project.props.pretext}
        </div>
      </div>

      {opened &&
        detail.id === `${project.props.id}_${project.props.title}` &&
        project.props.link !== null && (
          <a
            href={project.props.link}
            target='_blank'
            // draggable='true'
            rel='noreferrer'
            // onDrag={() => console.log("dragging")}
            onMouseEnter={(e) => handleEnter("visit", e)}
            onMouseDown={(e) => handleEnter("visit", e)}
            onTouchStart={(e) => handleEnter("visit", e)}
            onMouseLeave={(e) => handleLeave("visit")}
            onMouseUp={(e) => handleLeave("visit")}
            onTouchEnd={(e) => handleLeave("visit")}
            className='visitLink'
            ref={visitLink}
          >
            {project.props.callToAction}
          </a>
        )}
    </div>
  );
};

export default CardItem;
