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
import {
  IoBluetooth,
  IoReorderThree,
} from "react-icons/io5";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import configValues from "../../data/configValues.json";
import { store } from "../../context/store";
import { BsDot } from "react-icons/bs";

import "./styles/header.css";

import { captureScroll } from "../../utils/scrollDirection";

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
  const screenHeight = useSelector(
    (state) => state.app.screenHeight
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

  useEffect(() => {
    target.current =
      document.getElementById("target");
  }, []);

  let param = window.location.href
    .split("/")
    .pop();

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
          const ham =
            document.querySelectorAll(
              ".hamburger"
            );
          if (window > 130) {
            NL.current.classList.add(
              "navLogo"
            );
            ham.forEach((el) =>
              el.classList.toggle(
                "scrolledDown",
                true
              )
            );
            setScrolledDown(true);
            gsap.to(
              ".spacer.forDropDown",
              {
                marginBottom: 0,
              }
            );
          } else {
            setScrolledDown(false);
            NL.current.classList.remove(
              "navLogo"
            );
            gsap.to(
              ".spacer.forDropDown",
              {
                marginBottom: 69,
              }
            );
            ham.forEach((el) =>
              el.classList.toggle(
                "scrolledDown",
                false
              )
            );
          }
        }
        // console.log(scrolledDown);
      }
    );
  }, []);

  // handles drop down

  const [
    showMobileNav,
    setShowMobileNav,
  ] = useState(false);

  useEffect(() => {
    if (showMobileNav) {
      gsap.to(".contentNav", {
        height: 231, //231
      });
    } else {
      gsap.to(".contentNav", {
        height: 50,
      });
    }
  }, [showMobileNav]);

  useEffect(() => {
    if (
      screenWidth >
      configValues.breakpoints.mobile
    ) {
      setShowMobileNav(false);
    }
  }, [screenWidth]);

  /// handles hiding nav on scroll down

  const [scrollDir, setScrollDir] =
    useState(1);

  let bottomNav = useRef();
  const triggerPoint = 500;
  const condition = () => {
    const el = document.querySelector(
      ".navItems"
    );
    return !el.classList.contains(
      "show"
    );
  };
  const condition2 = () => {
    return (
      window.innerHeight <
      configValues.breakpoints
        .mobileHeight
    );
  };
  const condition3 = () => {
    const bool =
      window.innerWidth <
      configValues.breakpoints.mobile;
    // console.log(bool);
    return bool;
  };

  useEffect(() => {
    const event = captureScroll(
      () => setScrollDir(1),
      () => setScrollDir(-1),
      triggerPoint,
      condition,
      condition2,
      condition3
    );
    // return () => {
    //   window.removeEventListener(
    //     "scroll",
    //     event
    //   );
    // };
  }, []);

  useEffect(() => {
    console.log(scrollDir);
    if (bottomNav.current) {
      const el = bottomNav.current;
      if (scrollDir > 0) {
        gsap.to(el, {
          y: 0,
        });
      } else {
        gsap.to(el, {
          y: -50,
        });
      }
    }
  }, [scrollDir]);

  /// the html
  const Resume = () => (
    <ResumeButton
      href="/William_Owen_Resume.pdf"
      download="WilliamOwenResume"
      className="resumeButton"
    >
      Resume
    </ResumeButton>
  );

  const Quote = () => <p>Some Quote</p>;

  const Dot = ({ screenWidth }) => {
    console.log(
      screenWidth,
      configValues.breakpoints.mobile
    );
    if (
      screenWidth >
      configValues.breakpoints.mobile
    ) {
      return (
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
      );
    } else {
      return null;
    }
  };

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
                <IoReorderThree
                  color={
                    configValues.theme
                      .dark.color.main
                  }
                  size={30}
                  className="hamburger"
                  onClick={() =>
                    setShowMobileNav(
                      !showMobileNav
                    )
                  }
                />
              </div>
              <div className="flex C innerWrapper">
                <nav className="flex R subInnerWrapper exploreNav">
                  <div className="moreDetails">
                    <Resume />
                  </div>
                  {/* <div>
                  </div> */}
                </nav>
                <div className="quote">
                  <Quote />
                </div>
                <span id="target"></span>
              </div>
            </div>
          </div>
        </div>
      </Header>
      {showMobileNav && (
        <div
          className="closeBackdrop"
          onClick={() =>
            setShowMobileNav(false)
          }
        ></div>
      )}
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
        ref={bottomNav}
        // id="scrollTarget"
      >
        <IoReorderThree
          color={
            configValues.theme.dark
              .color.main
          }
          size={30}
          className="hamburger sticky"
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
            onClick={() => {
              window.scrollTo({
                top: 0,
              });
              setShowMobileNav(false);
            }}
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
        <div className="spacer forDropDown"></div>
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
            <a
              href="#contributions"
              onClick={() =>
                setShowMobileNav(false)
              }
            >
              Contributions
            </a>
            {/* </a> */}
          </li>{" "}
          <Dot
            screenWidth={screenWidth}
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
            <a
              href="#about"
              onClick={() =>
                setShowMobileNav(false)
              }
            >
              About
            </a>
            {/* </a> */}
          </li>{" "}
          <Dot
            screenWidth={screenWidth}
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
            <a
              href="#contact"
              onClick={() =>
                setShowMobileNav(false)
              }
            >
              Contact
            </a>
            {/* </a> */}
          </li>
          {screenWidth <
            configValues.breakpoints
              .mobile && (
            <>
              <li className="resBtnListItem">
                <Resume />
              </li>
              {/* <li className="quote">
                <Quote />
              </li> */}
            </>
          )}
          {/* {console.log(screenWidth)} */}
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

const ResumeButton = styled.a`
  /* .resumeButton { */
  /* border: 1px solid ${
    configValues.theme.dark.color
      .highlight
  }; */
  width: fit-content !important;
  color: ${
    configValues.theme.dark.color
      .highlight
  };
  box-shadow: 1px 1px 2px #c193c1,
    -1px 1px 2px #ad37ad,
    0px -1px 2px #5fcf19;
  transition: box-shadow 1s;

  @mixin BoxShadowColors {
    box-shadow: 0px -1px 2px #5fcf19,
      1px 1px 2px #c193c1,
      -1px 1px 3px #ad37ad,
      6px -9px 2px #5fcf19,
      -6px 8px 2px #c193c1;
  }

  &:hover {
    /* @include BoxShadowColors; */
    box-shadow: 0px -1px 2px #5fcf19,
      1px 1px 2px #c193c1,
      -1px 1px 3px #ad37ad,
      6px -9px 2px #5fcf19,
      -6px 8px 2px #c193c1;
  }
  }
  /* @media #{$sma} */
  
  &:focus,
  &:visited {
    ${
      window.innerWidth >
        configValues.breakpoints
          .mobile &&
      `
    box-shadow: blue
  `
    }
`;

const Header = styled.header`
  h1 {
    text-shadow: 0px 0px 3px white;
    color: black !important;
  }
  *:not(svg) {
    background-color: #232b3c !important;
  }

  /* nav {
  } */
`;

const Nav = styled.nav`
  background: #232b3c !important;
  color: black !important;
  ul {
    background: #232b3c !important;
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
