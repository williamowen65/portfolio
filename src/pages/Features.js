import React from 'react'
import styled from 'styled-components'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import DisplayCard from '../features/displayCard'
import largeCardImg from '../assets/flower.jpg'
import SectionBreak from '../features/sectionBreaks'

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
      <Section>
        <h2>Section Breaks</h2>
        {/* <SectionBreak type={"parallax"} /> */}
      </Section>

    </FeaturesStyled>
  )
}

const FeaturesStyled = styled.div`

`