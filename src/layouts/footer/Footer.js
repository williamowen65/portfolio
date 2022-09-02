import React, {
  useContext,
  useEffect,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import "./styles/index.css";
import configValues from "../../data/configValues.json";
import styled from "styled-components";
import ResumeButton from "../../layouts/components/ResumeButton";
import WO from "../components/WO";

const Footer = ({ style }) => {
  let target = useRef();

  useEffect(() => {
    target.current =
      document.getElementById("target");
  }, []);

  const scroll = () => {
    if (
      window.scrollY >
      target.current.offsetTop
    ) {
      target.current.scrollIntoView({});
    }
  };

  const github = () => {
    window.open(
      "https://github.com/williamowen65",
      "_blank"
    );
  };
  const linkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/webdevpreneur29/",
      "_blank"
    );
  };

  return (
    <FooterStyled
      className="footer"
      style={style}
    >
      {/* <img src='./assets/imgs/GitHub.png' alt='' /> */}
      <div className="bottomFooter">
        <div>
          <ul>
            <li>
              {/* <Link to='/rate'> Give a review</Link> */}
              <ResumeButton />
            </li>
          </ul>
        </div>

        <div className="links">
          <img
            className="github"
            src="./assets/imgs/GitHub.png"
            alt=""
            onClick={github}
          />
          <img
            className="linkedIn"
            src="./assets/imgs/linkedin.png"
            alt=""
            onClick={linkedIn}
          />
        </div>

        <div>
          <ul>
            <li>
              <a
                href="https://calendar.google.com/calendar/u/0/embed?src=fcmj4f2tucb7j8683cj8dtp4do@group.calendar.google.com&ctz=America/Los_Angeles"
                target="_blank"
                rel="noreferrer"
              >
                Calendar
              </a>
            </li>
            <li>Theme</li>
          </ul>
        </div>
      </div>
      <div
        className="footerLogo"
        onClick={() => {
          window.scrollTo({
            top: 0,
          });
        }}
      >
        <WO />
        <p>Web Dev Portfolio</p>
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  background: #00000026;
  /* background: ${configValues.theme
    .dark.background.color.window}; */
  h1 {
    text-shadow: 0px 0px 4px white;
  }
  a {
    color: ${configValues.theme.dark
      .color.highlight};
  }
`;
