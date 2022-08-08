import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Provider } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Hamburger from "./assets/Hamburger";
import { useSelector, useDispatch } from "react-redux";
import configValues from '../../data/configValues.json'

import './styles/header.css'

import {
  minimize,
  changeTheme,
  toggle
} from './context/navbarReducer.js'

import { store } from "./context/store";
import styled from "styled-components";

const Navbar = () => {


  const {
    mobile,
    sidenavToggle,
    minimized
  } = useSelector(state => state.navbar)


  const toggleSidenav = () => {
    toggle(!sidenavToggle);
  };

  let target = useRef();

  useEffect(() => {
    target.current = document.getElementById("target");
  }, []);

  let param = window.location.href.split("/").pop();

  const scroll = () => {
    // console.log(document.getElementById("scrollTo"));
    // console.log("hi", target);
    // if(window.)
    // console.log(window.scrollY, target.current.offsetTop);
    if (window.scrollY > target.current.offsetTop) {
      target.current.scrollIntoView({
        // behavior: "smooth",
      });
    }
  };

  const [scrolledDown, setScrolledDown] = useState(false);
  const NL = useRef();
  useEffect(() => {


    window.addEventListener("scroll", (e) => {
      const window = e.target.scrollingElement.scrollTop;
      if (NL.current.classList != null) {
        if (window > 130) {
          NL.current.classList.add("navLogo");
          setScrolledDown(true);
        } else {
          setScrolledDown(false);
          NL.current.classList.remove("navLogo");
        }
      }
      // console.log(scrolledDown);
    });
  }, []);

  return (
    <Fragment>
      <Header>
        <div className='main-header'>
          <div className='flex C'>
            <div className='flex R outerWrapper'>
              <Link className='brand' to='/'>
                <h1>WO</h1>
                <p>Web Dev Portfolio</p>
              </Link>
              <div className='flex C innerWrapper'>
                <nav className='flex R subInnerWrapper exploreNav'>
                  <div className='moreDetails'>
                    <a
                      href='https://calendar.google.com/calendar/u/0/embed?src=fcmj4f2tucb7j8683cj8dtp4do@group.calendar.google.com&ctz=America/Los_Angeles'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <p>Calendar</p>
                    </a>{" "}
                    |{" "}

                    <a href='/William_Owen_Resume.pdf' download='WilliamOwenResume'>Resume</a>
                  </div>
                  <div>
                  </div>
                </nav>
                <div className='quote'>
                  <p>Some Quote</p>
                </div>
                <span id='target'></span>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Nav
        className={
          mobile
            ? "contentNav center"
            : minimized
              ? "contentNav flexEnd"
              : "contentNav right"
        }
        ref={target}
        id='scrollTarget'
      >
        {/* {!mobile && minimized && (
          <a href='#!' onClick={(e) => minimize(false)}>
            <i className='material-icons'>keyboard_arrow_right</i>
          </a>
        )} */}
        <span></span>
        <div className='NL' ref={NL}>
          <h1 style={{ textShadow: '0px 0px 4px white' }}>WO</h1>
          <p>Web Dev</p>
        </div>
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
          style={scrolledDown && mobile ? { transform: "translateY(5px)" } : {}}
        >
          <li onClick={scroll} className={param === "" ? "active" : ""}>
            {/* <li onClick={scroll}> */}
            {/* <a href='#target'> */}
            <a href='#contributions'>Contributions</a>
            {/* </a> */}
          </li>{" "}
          |
          <li onClick={scroll} className={param === "about" ? "active" : ""}>
            {/* <a href='#target'> */}
            <a href='#about'>About</a>
            {/* </a> */}
          </li>{" "}
          |
          <li onClick={scroll} className={param === "contact" ? "active" : ""}>
            {/* <a href='#target'> */}
            <a href='#contact'>Contact</a>
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
)


export default Wrapper


const Header = styled.header`
  h1 {
    text-shadow: 0px 0px 3px white;
  }
  *{
    background-color: ${configValues.theme.dark.background.color.main} !important;
    background: ${configValues.theme.dark.background.color.main} !important;
  }
  /* nav {
  } */
`
const Nav = styled.nav`
    background-color: ${configValues.theme.dark.background.color.main} !important;
    background: ${configValues.theme.dark.background.color.main} !important;
    
    
    li {
      a{
        color: ${configValues.theme.dark.color.main};
      }
      &.active a {
        color: ${configValues.theme.dark.color.mainOffset} !important;
      }
    }
`