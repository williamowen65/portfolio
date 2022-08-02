import React from 'react'
import styled from 'styled-components'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import DisplayCard from '../features/displayCard'
import largeCardImg from '../assets/flower.jpg'
import SectionBreak from '../features/sectionBreaks'
import earth from '../assets/earth.png'
import space from '../assets/space.jpg'
import spaceman from '../assets/spaceman.png'

export default function Features() {
  return (
    <FeaturesStyled>
      <Section>
        <h2>Cards</h2>
        <DisplayCard type='Brittany' {...{
          title: "Large Card",
          desc: "Flexible layout for mobile and desktop. Can be aligned left or right for larger layout",
          img: largeCardImg
        }} />
      </Section>
      {/* <Section> */}
      {/* <h2>Buttons</h2> */}
      <div>
        <Button>Buttons</Button>
      </div>
      {/* </Section> */}
      <Section>
        <h2>Implement Auth</h2>
      </Section>
      <Section className="parallax">
        <h2>Section Breaks</h2>
        <SectionBreak type={"udemy"} fullLength={true} withBorder={true}>
          <SectionBreak.Chunk num={4} />
          <Div data-depth="0.05" className='parallax-item space img'>
            <img src={space} />
          </Div>
          <Div data-depth="0.5" className='parallax-item earth img'>
            <img src={earth} />
          </Div>
          <SectionBreak.Chunk num={4} />
          <Div data-depth="0.1" className='parallax-item spaceman img'>
            <img src={spaceman} alt="" />
          </Div>
          <SectionBreak.Chunk num={10} />
          <Div data-depth="0.1" className='parallax-item ad img scrollDrift'>
            <div className="add">
              <p>Customizable parallax experiences here!</p>
            </div>
          </Div>
          <SectionBreak.Chunk num={1} />
        </SectionBreak>
        <p>Custom parallax effects</p>
      </Section>

    </FeaturesStyled>
  )
}

const FeaturesStyled = styled.div`
  /* .earth { */
    /* display: inline-block; */
    section.parallax {

      text-align: center;
      /* height: 50px; */
      img {
        /* position: absolute; */
        margin: auto;
      }
    }
  /* } */
  `

const Div = styled.div`
text-align: center;
/* .parallax-item { */
  color: transparent;
  &.img {
    margin: auto;
    /* overflow-y: hidden; */
    height: 50px;
    width: 365px;
  }
  &.space {
    width: 200%;
    img {
      position: relative;
      left: -291px;
      top: -50px;
      transform: scale(1.1);
    }
    /* display: flex; */
    /* justify-content: center; */
  }
  &.spaceman {
    width: 200px;
    margin: auto;
    margin-left: 15%;
    /* transfo; */
    img {
      transform: rotate(-70deg) scale(0.5);
    }
    /* animation: lostInSpace  timing-function delay iteration-count direction fill-mode; */
  }
  &.ad {
    position: absolute;
    left: 125%;
    bottom: -28%;
    .add{
      width: 305px;
      /* height: 100px; */
      font-size: 30px;
      background-color: #d596e2;
      padding: 7px;
      text-shadow: 0px 0px 4px black;
      border: 1px solid black;
      text-shadow: 1px 1px 4px black;
      display: flex;
      justify-content: center;
      align-items: center;
      /* transform: scale(0.2); */
    }
  }
  

/* } */
`