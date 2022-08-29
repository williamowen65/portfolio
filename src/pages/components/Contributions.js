import React, {
  useEffect,
  useRef,
} from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { DiDocker } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import configValues from "../../data/configValues.json";
import * as d3 from "d3";

export default function Contributions() {
  return (
    <>
      <Article>
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
            element={() => (
              <div>HELLO</div>
            )}
          />

          <p>
            Automate nearly 100% of your
            development experience in
            any language of your choice
            with these simple lines of
            JavaScript.
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
          30px
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
  }
`;

const ToolTip = (element) => {
  const tooltip = useRef();

  useEffect(() => {
    let svg;
    if (tooltip.current) {
      const el = document.querySelector(
        "svg.tooltip.info.elem"
      );
      svg = d3.select(el);
      const g = svg.append("g");

      const pathGen = d3.path();
      pathGen.moveTo(0, 0);
      pathGen.lineTo(-10, -10);
      pathGen.lineTo(-100, -50);
      pathGen.lineTo(-100, -100);
      pathGen.lineTo(100, -100);
      pathGen.lineTo(100, -50);
      pathGen.lineTo(10, -10);
      // pathGen.lineTo(100, 60);
      // pathGen.lineTo(10, 10);
      pathGen.closePath();

      g.append("path")
        .attr("d", pathGen)
        .attr("fill", "black");
    }

    const pathGen = drawPopup();

    return () => {
      // svg?.remove();
    };
  }, [tooltip.current]);

  const drawPopup = () => {
    const path = d3.path;

    // path.lineTo(10,10)

    return path;
  };

  const handleClick = () => {};

  return (
    <ToolTipStyled>
      <div ref={tooltip}>
        <ImInfo
          className="tooltip info"
          size={20}
          onClick={handleClick}
        />
        <svg className="tooltip info elem"></svg>
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
