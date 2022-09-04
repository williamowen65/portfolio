import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { DiDocker } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import configValues from "../../../data/configValues.json";
import * as d3 from "d3";
import "./styles/_contributions.scss";
import gsap from "gsap";
import Data from "./data/contributions-data.json";

export default function Contributions() {
  const [types, setTypes] = useState(
    new Set()
  );
  const [selected, setSelected] =
    useState("Dev Tools");
  useEffect(() => {
    Data.forEach((entry) => {
      types.add(entry.type);
    });
    setTypes(types);
  }, []);

  return (
    <>
      <Article className="contributions">
        <fieldset>
          <legend>
            <h2 className="contribute">
              My Contributions to the{" "}
              <nobr>
                Open Source Community
              </nobr>
            </h2>
          </legend>

          <ToolTip
            Element={() => (
              <div>Custom tool Tip</div>
            )}
          />
          <div className="content">
            <div className="types">
              {Array.from(types).map(
                (type, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setSelected(type);
                    }}
                    className={
                      selected ===
                        type && "active"
                    }
                  >
                    {type}
                  </p>
                )
              )}
            </div>
            <ul className="list">
              {Data.filter(
                (entry) =>
                  entry.type == selected
              ).map((entry, i) => (
                <p key={i}>
                  {entry.description}
                </p>
              ))}
            </ul>
          </div>
          {/* <div className="item">
            <h3>#1</h3>
            <p>
            Automate custom projects
              in any language of your
              choice with these simple
              lines of JavaScript.
            </p>

            <div className="action">
              <p>Check it out</p>
              <span className="outer">
                <span>
                  <BsGithub size={30} />
                </span>
                <span>
                  <FaDocker size={30} />
                </span>
              </span>
            </div>
          </div> */}
        </fieldset>
      </Article>
    </>
  );
}

const Article = styled.article`
  fieldset {
    position: relative;
    legend {
      display: flex;
      align-items: center;
      text-align: left;
      color: ${configValues.theme.dark
        .color.main};
      h2 {
        width: min-content;
        /* font-size: 27px; */
        /* white-space: nowrap; */
        font-size: clamp(
          10px,
          6vw,
          25px
        );
      }
    }
    svg.info {
      color: ${configValues.theme.dark
        .color.main};
      cursor: pointer;
      position: absolute;
      right: 20px;
      top: -30px;
      /* transform: translate(0, -10px); */
      /* margin: 0 25px; */
    }
    a {
      padding: 10px;
      margin: 10px;
    }
    .action {
      display: block;
      width: min-content;
      white-space: nowrap;
      margin: 20px auto;
      text-align: center;
      /* position: relative; */
      span.outer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        span {
          cursor: pointer;
          padding: 20px;
          margin: 0 20px;
        }
      }
    }
    .types {
      background-color: ${configValues
        .theme.dark.background.color
        .window};
    }
  }
`;

const ToolTip = ({ Element, text }) => {
  const tooltip = useRef();

  const handleClick = () => {
    const el = getComputedStyle(
      document.querySelector(
        ".tooltip.elem"
      )
    ).opacity;
    gsap.to(".tooltip.elem", {
      opacity: el == "1" ? 0 : 1,
    });
  };
  return (
    <ToolTipStyled>
      <div ref={tooltip}>
        <ImInfo
          className="tooltip info"
          size={20}
          onClick={handleClick}
        />
        <div className="tooltip info elem">
          <Element />
        </div>
      </div>
    </ToolTipStyled>
  );
};

const ToolTipStyled = styled.div`
  /* position: absolute;
  right: 20px;
  top: -30px; */
  svg {
    overflow: visible;
  }
`;
