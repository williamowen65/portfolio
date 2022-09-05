import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";

import ReactLogo from "../../../assets/icons/react.png";
import ExpressLogo from "../../../assets/icons/express.png";
import VueLogo from "../../../assets/icons/vue.png";
import MongoLogo from "../../../assets/icons/mongo.png";
import ElectronLogo from "../../../assets/icons/electron.png";
import TypeScriptLogo from "../../../assets/icons/typescript.png";
import GSAPLogo from "../../../assets/icons/gsap.png";
import GimpLogo from "../../../assets/icons/gimp.png";
import NodeJSLogo from "../../../assets/icons/node.png";
import JenkinsLogo from "../../../assets/icons/jenkins.png";
import GithubLogo from "../../../assets/icons/github.png";
import DockerLogo from "../../../assets/icons/docker.png";
import SassLogo from "../../../assets/icons/sass.png";
import D3Logo from "../../../assets/icons/d3.png";
import Redux from "../../../assets/icons/redux.png";

import "./iconStyles.scss";

import {
  GrDocker,
  GrGithub,
} from "react-icons/gr";
import { SiSass } from "react-icons/si";
import configValues from "../../../data/configValues.json";

import { useSelector } from "react-redux";

import gsap from "../../../../gsap/gsap.min";

const random = (arr) => {
  return (
    Math.random() * (arr[1] - arr[0]) +
    arr[0]
  );
};

export default function Icons() {
  // const screenWidth = useSelector(state => state.app.screenWidth)
  // const [width, setWidth] = useState(0)

  // useEffect(() => {
  //   setWidth(screenWidth)
  // }, [screenWidth])

  const els = gsap.utils.toArray(
    "span.icon"
  );

  const easeArr = ["linear"];

  function* DurGen() {
    return;
  }

  return (
    <>
      <span className="icon github">
        <img
          src={GithubLogo}
          alt=""
          style={{
            display: "inline-block",
            filter: "invert(100%)",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={DockerLogo}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>

      <span
        className="icon"
        href="#"
        title="Sass"
      >
        <img
          src={SassLogo}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src="https://miro.medium.com/max/2400/1*xQCjgB2DVqhtqGoGw9E6TQ.png"
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={ReactLogo}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={Redux}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={ExpressLogo}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png"
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={JenkinsLogo}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={VueLogo}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>

      <span className="icon" href="#">
        <img
          src={MongoLogo}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={ElectronLogo}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src="https://www.lifewire.com/thmb/jDMd4fXv49vV4TBSfJWDJk22frY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Inkscape_Logo.svg-58e992d15f9b58ef7e1988a2.png"
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={TypeScriptLogo}
          alt=""
          style={{
            display: "inline-block",
            filter: "invert(100%)",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={GimpLogo}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={NodeJSLogo}
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span
        className="icon"
        href="#"
        title="GreenSock"
      >
        <img
          src={GSAPLogo}
          alt=""
          style={{
            display: "inline-block",
            width: "150px",
            transform:
              "translateX(-20px)",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src={D3Logo}
          width="50px"
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
      <span className="icon" href="#">
        <img
          src="http://yargs.js.org/images/yargs-logo.png"
          width="50px"
          alt=""
          style={{
            display: "inline-block",
          }}
        />
      </span>
    </>
  );
}
