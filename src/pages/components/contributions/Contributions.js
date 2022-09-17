import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import {
  BsGithub,
  BsMedium,
} from "react-icons/bs";
import { DiDocker } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import configValues from "../../../data/configValues.json";
import * as d3 from "d3";
import "./styles/_contributions.scss";
import gsap from "gsap";
import Data from "./data/contributions-data.json";
import { useSelector } from "react-redux";

export default function Contributions() {
  const screenWidth = useSelector(
    (state) => state.app.screenWidth
  );
  const [types, setTypes] = useState(
    new Set()
  );
  const [selected, setSelected] =
    useState("Dev Tools");

  const [projectNum, setProjectNum] =
    useState(1);

  useEffect(() => {
    Data.forEach((entry) => {
      types.add(entry.type);
    });
    setTypes(types);
  }, []);

  const listMargin = useRef();
  useEffect(() => {
    if (listMargin.current) {
      const typeWidth =
        getComputedStyle(
          document.querySelector(
            ".content.main .types"
          )
        ).width;
      listMargin.current.style.paddingLeft =
        parseFloat(typeWidth) +
        5 +
        "px";

      setTimeout(() => {
        const typeHeight =
          getComputedStyle(
            document.querySelector(
              ".content .types p"
            )
          ).height;
        listMargin.current.style.height =
          parseFloat(typeHeight) + "px";
      });
    }
  }, [listMargin.current]);

  const Types = ({ small }) => {
    const screenWidth = useSelector(
      (state) => state.app.screenWidth
    );

    const TypesStyled = styled.div`
      &.small {
        display: ${screenWidth <
        configValues.breakpoints.mobile
          ? "flex"
          : "none"} !important;
      }
      &:not(.small) {
        display: ${screenWidth >
        configValues.breakpoints.mobile
          ? "flex"
          : "none"} !important;
      }
    `;

    return (
      <TypesStyled
        className={`types ${
          small && "small"
        }`}
      >
        {Array.from(types).map(
          (type, i) => (
            <p
              key={i}
              onClick={() => {
                setSelected(type);
                setProjectNum(1);
              }}
              className={
                selected === type
                  ? "active"
                  : null
              }
            >
              <nobr>{type}</nobr>
            </p>
          )
        )}
      </TypesStyled>
    );
  };

  return (
    <>
      <Article
        className="contributions"
        sw={screenWidth}
      >
        <fieldset>
          <legend>
            <h2 className="contribute">
              <nobr>
                What I've been
              </nobr>{" "}
              working on
            </h2>
          </legend>

          {/* <ToolTip
            Element={() => (
              <div>Custom tool Tip</div>
            )}
          /> */}
          <div className="content">
            <Types small />
          </div>
          <div
            className="list"
            ref={listMargin}
          >
            {Data.filter(
              (entry) =>
                entry.type == selected
            ).map((entry, i) => (
              <p
                key={i}
                onClick={() => {
                  setProjectNum(i + 1);
                }}
                className={
                  projectNum === i + 1
                    ? "active"
                    : null
                }
              >
                {i + 1}
              </p>
            ))}
          </div>
          <div className="content main">
            <Types />
            <div
              className="actualContent"
              id="content"
            >
              {Data.filter(
                (entry) =>
                  entry.type == selected
              )
                .filter(
                  (entry, i) =>
                    i + 1 === projectNum
                )
                .map((entry, i) => (
                  <div key={i}>
                    <h3>
                      <div
                        className="action"
                        onClick={() => {
                          const link =
                            Object.keys(
                              entry.links
                            );
                          window.location =
                            entry.links[
                              link
                            ];
                        }}
                      >
                        {entry.links
                          .github ? (
                          <BsGithub
                            size={20}
                            color={
                              configValues
                                .theme
                                .dark
                                .color
                                .main
                            }
                          />
                        ) : (
                          <BsMedium
                            size={20}
                            color={
                              configValues
                                .theme
                                .dark
                                .color
                                .main
                            }
                          />
                        )}
                      </div>
                      {entry.meta.title}
                    </h3>
                    <p className="description">
                      {
                        entry.meta
                          .description
                      }
                    </p>
                  </div>
                ))}
            </div>
          </div>
          {/* <div className="item">
            <h3>#1</h3>
            <p>
            Automate custom projects
              in any language of your
              choice with these simple
              lines of JavaScript.
            </p>

       
          </div>
           */}
        </fieldset>
      </Article>
    </>
  );
}

const Article = styled.article`
  overflow: hidden;
  fieldset {
    position: relative;
    > .content {
      width: ${({ sw }) =>
        sw <
        configValues.breakpoints.mobile
          ? "calc(100% - 63px)"
          : "auto"} !important;
      }
    }
    .actualContent {
      width: ${({ sw }) =>
        console.log(
          sw,
          sw <
            configValues.breakpoints
              .mobile
        )};
  
    background-color: ${
      configValues.theme.dark.background
        .color.window
    };
    &#content {
      /* > div {

        width: ${({ sw }) =>
          sw <
          configValues.breakpoints
            .mobile
            ? "calc(100% - 63px)"
            : "auto"} !important;
      } */
    };
      margin-left: ${({ sw }) =>
        sw <
        configValues.breakpoints.mobile
          ? 0
          : 12}px !important;
      }
    }
    legend {
      display: flex;
      align-items: center;
      text-align: left;
      color: ${
        configValues.theme.dark.color
          .main
      };
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
      color: ${
        configValues.theme.dark.color
          .main
      };
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
    }
    .types {
      background-color: ${
        configValues.theme.dark
          .background.color.window
      };
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
