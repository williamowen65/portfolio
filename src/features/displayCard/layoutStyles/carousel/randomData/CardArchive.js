import React from "react";
import styled from "styled-components";
import Card, {
  idGen,
} from "./CardArchiveSetup.js";

import * as A from "./Attributes.js";

// import YouTube from '../assets/Youtube.js'

export const allCards = [
  (() => {
    const UniqueCardStyle = styled.div``;
    return (
      <Card
        title="Customized Client Projects"
        imgSrc={
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Dfsd"
            style={{
              objectFit: "none",
              transform: "scale(0.5)",
            }}
          />
        }
        pretext="A quick glimpse at how"
        attributes={[
          A.STRENGTH,
          A.ENDURANCE,
        ]}
        link={"null"}
        callToAction="Accept"
        id={idGen.next().value}
      >
        <UniqueCardStyle></UniqueCardStyle>
      </Card>
    );
  })(),

  <Card
    title="Some Card"
    imgSrc={
      <img
        src="https://images.unsplash.com/photo-1657299156791-44140a28a518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
        alt="Dfsd"
        style={{
          width: "auto",
        }}
      />
    }
    pretext="Hello world"
    attributes={[A.STEALTH, A.VIRTUE]}
    link={"http://www.example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}
  >
    <h4>Header</h4>
    <p>
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Quos, ab accusamus nisi labore
      libero quis natus distinctio
      repellat placeat recusandae.
    </p>
    <p>
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Quos, ab accusamus nisi labore
      libero quis natus distinctio
      repellat placeat recusandae.
    </p>
    <hr />
    <p>
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Quos, ab accusamus nisi labore
      libero quis natus distinctio
      repellat placeat recusandae.
    </p>
  </Card>,
];

// const Card = styled.div`

// `

// const Title = styled.div`

// `
