import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { DiDocker } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import configValues from "../../data/configValues.json";

export default function Contributions() {
  return (
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
        <ImInfo className="info" />

        <p>
          Automate nearly 100% of your
          development experience in any
          language of your choice with
          these simple lines of
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
