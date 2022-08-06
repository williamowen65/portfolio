import React, { useEffect } from 'react'
import configValues from '../../data/configValues.json'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import Brittany from './layoutStyles/Brittany.js'
import Carousel from './layoutStyles/carousel/Carousel.js';


export default function DisplayCard({ type = 'small', title, data }) {
  const screenWidth = useSelector(state => state.app.screenWidth)

  // const thisType = configValues.findAlt.displayCard[type]  //enum("large","medium","small")

  let el;

  switch (type) {
    case "Brittany":
      el = <Brittany data={{ ...data, title }} />
      break;
    case "carousel":
      el = <Carousel
        cards={data}
        title={title} />
      break;
    default:
      return null
      break;
  }
  return (
    <Article>
      {el}
    </Article>
  )

}


const Article = styled.article`
  margin: 60px 0;
`