import React, {
  useEffect,
  useRef,
} from "react";
import styled from "styled-components";
import Button from "../components/ui/Button";
import EmbeddedLink from "../components/ui/EmbeddedLink.js";
import Modal from "../components/ui/Modal";
import DisplayCard from "../features/displayCard/index";
import configValues from "../data/configValues.json";
// import Section from '../components/ui/Section'
import gsap from "../../gsap/gsap.min";
import GSDevTools from "../../gsap/GSDevTools.min";

// import { git } from 'react-icons/all'

import Hero from "./components/hero/Hero.js";
import Contributions from "./components/contributions/Contributions";
import Contact from "./components/Contact";

export default function Home() {
  // useEffect(() => {
  //   gsap.registerPlugin(GSDevTools)
  //   const tools = GSDevTools.create()
  //   console.log(tools);

  //   return () => {
  //     tools.kill()
  //   }
  // }, [])

  return (
    <>
      <Hero />
      <Content id="contributions">
        <Contributions />
      </Content>
      <Section className="sectionBreak" />
      <Content id="about">
        <DisplayCard
          type="carousel"
          title={"About me..."}
        />
      </Content>
      <Content id="contact">
        <Contact />
      </Content>
    </>
  );
}

const Section = styled.section`
  height: 100px;
`;

const Content = styled.div`
  /* #contributions { */
  padding-top: 100px;
  &#about {
    /* padding-bottom: 200px; */
    /* padding-bottom: clamp(
      200px,
      6vh,
      200px
    ); */
  }
  /* } */
`;
// const H
