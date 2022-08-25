import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Provider } from "react-redux";
import {
  Link,
  useParams,
} from "react-router-dom";
import Hamburger from "./assets/Hamburger";
import { IoReorderThree } from "react-icons/io5";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import configValues from "../../data/configValues.json";
import { store } from "./context/store";
import { BsDot } from "react-icons/bs";

import "./styles/header.css";

import {
  minimize,
  changeTheme,
  toggle,
} from "./context/navbarReducer.js";

// import { store } from "./context/store";
import styled from "styled-components";
import WO from "../components/WO";

const Navbar = ({
  triggerRerender,
}) => {
  const screenWidth = useSelector(
    (state) => state.app.screenWidth
  );

  const {
    mobile,
    sidenavToggle,
    minimized,
  } = useSelector(
    (state) => state.navbar
  );

  const toggleSidenav = () => {
    toggle(!sidenavToggle);
  };

  let target = useRef();

  useEffect(() => {
    target.current =
      document.getElementById("target");
  }, []);

  let param = window.location.href
    .split("/")
    .pop();

  const scroll = () => {
    // console.log(document.getElementById("scrollTo"));
    // console.log("hi", target);
    // if(window.)
    // console.log(window.scrollY, target.current.offsetTop);
    if (
      window.scrollY >
      target.current.offsetTop
    ) {
      target.current.scrollIntoView({
        // behavior: "smooth",
      });
    }
  };

  const [
    scrolledDown,
    setScrolledDown,
  ] = useState(false);
  const NL = useRef();
  useEffect(() => {
    window.addEventListener(
      "scroll",
      (e) => {
        const window =
          e.target.scrollingElement
            .scrollTop;
        if (
          NL.current.classList != null
        ) {
          if (window > 130) {
            NL.current.classList.add(
              "navLogo"
            );
            setScrolledDown(true);
          } else {
            setScrolledDown(false);
            NL.current.classList.remove(
              "navLogo"
            );
          }
        }
        // console.log(scrolledDown);
      }
    );
  }, []);

  const [
    showMobileNav,
    setShowMobileNav,
  ] = useState(false);

  return (
    <Fragment>
      <Header>
        <div className="main-header">
          <div className="flex C">
            <div className="flex R outerWrapper">
              <div className="logoContainer">
                <Link
                  className="brand top"
                  to="/"
                  onClick={() => {
                    triggerRerender();
                    console.log(
                      triggerRerender
                    );
                  }}
                >
                  <h1>WO</h1>
                  <p>
                    Web Dev Portfolio
                  </p>
                </Link>
              </div>
              <div className="flex C innerWrapper">
                <nav className="flex R subInnerWrapper exploreNav">
                  <div className="moreDetails">
                    <a
                      href="/William_Owen_Resume.pdf"
                      download="WilliamOwenResume"
                      className="resumeButton"
                    >
                      Resume
                    </a>
                  </div>
                  {/* <div>
                  </div> */}
                </nav>
                <div className="quote">
                  <p>Some Quote</p>
                </div>
                <span id="target"></span>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Nav
        /*
          # Smaller header on scrolling

          It should hide when scrolling down past a specific point.
          to get it back, slightly scroll up.... 
          WO web DEV in center with hamburger on right
            Other items are in drop down on mobile, maybe drawer in desktop
        */
        className={
          mobile
            ? "contentNav center"
            : minimized
            ? "contentNav flexEnd"
            : "contentNav right"
        }
        ref={target}
        id="scrollTarget"
      >
        <IoReorderThree
          color={
            configValues.theme.dark
              .color.main
          }
          size={30}
          className="hamburger"
          onClick={() =>
            setShowMobileNav(
              !showMobileNav
            )
          }
        />
        <Link
          to="/"
          className="logoSmall"
        >
          <div
            className="NL" //plus navLogo dynamically on scroll
            ref={NL}
            onClick={() =>
              window.scrollTo({
                top: 0,
              })
            }
          >
            <WO />
            <p>Web Dev</p>
          </div>
        </Link>
        {/* {scrolledDown ? (
          <div className='navLogo NL'>
            <h1>WO</h1>
            <p>Web Dev</p>
          </div>
        ) : (
          <div
            className='navLogoOff NL'
            // style={!pageLoaded ? { display: "none" } : { display: "none" }}
          >
            <h1>WO</h1>
            <p>Web Dev</p>
          </div>
        )} */}
        <ul
          className={
            showMobileNav
              ? "navItems show"
              : "navItems"
          }
          style={
            scrolledDown && mobile
              ? {
                  transform:
                    "translateY(5px)",
                }
              : {}
          }
        >
          <li
            onClick={scroll}
            className={
              param === ""
                ? "active"
                : ""
            }
          >
            {/* <li onClick={scroll}> */}
            {/* <a href='#target'> */}
            <a href="#contributions">
              Contributions
            </a>
            {/* </a> */}
          </li>{" "}
          <BsDot
            size={30}
            color={
              configValues.theme.dark
                .color.main
            }
            style={{
              transform:
                "translateY(-5px)",
            }}
          />
          <li
            onClick={scroll}
            className={
              param === "about"
                ? "active"
                : ""
            }
          >
            {/* <a href='#target'> */}
            <a href="#about">About</a>
            {/* </a> */}
          </li>{" "}
          <BsDot
            size={30}
            color={
              configValues.theme.dark
                .color.main
            }
            style={{
              transform:
                "translateY(-5px)",
            }}
          />
          <li
            onClick={scroll}
            className={
              param === "contact"
                ? "active"
                : ""
            }
          >
            {/* <a href='#target'> */}
            <a href="#contact">
              Contact
            </a>
            {/* </a> */}
          </li>
        </ul>
      </Nav>
      {/* </div> */}
    </Fragment>
  );
};

const Wrapper = (props) => (
  <Provider store={store}>
    <Navbar {...props} />
  </Provider>
);

export default Wrapper;

const Header = styled.header`
  h1 {
    text-shadow: 0px 0px 3px white;
    color: black !important;
  }
  * {
    background-color: #232b3c !important;
  }
  /* nav {
  } */
  .resumeButton {
    /* border: 1px solid ${configValues
      .theme.dark.color.highlight}; */
    color: ${configValues.theme.dark
      .color.highlight};
    box-shadow: 1px 1px 2px #c193c1,
      -1px 1px 2px #ad37ad,
      0px -1px 2px #5fcf19;

    &:hover {
      box-shadow: 0px -1px 2px #5fcf19,
        1px 1px 2px #c193c1,
        -1px 1px 2px #ad37ad;
      /* background-color: rgb(121, 91, 255) !important; */
      /* border: 1px solid rgb(190, 189, 211); */
      /* color: black; */
    }
  }
`;

const Nav = styled.nav`
  background: #232b3c !important;
  color: black !important;
  ul {
    display: flex;
  }
  li {
    a {
      color: ${configValues.theme.dark
        .color.main};
    }
    &.active a {
      color: ${configValues.theme.dark
        .color.mainOffset} !important;
    }
  }
`;
