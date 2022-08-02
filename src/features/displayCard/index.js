import React, { useEffect } from 'react'
import configValues from '../../data/configValues.json'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import Brittany from './layoutStyles/Brittany.js'

export default function DisplayCard({ type = 'small', title, desc, img }) {
  const screenWidth = useSelector(state => state.app.screenWidth)

  // const thisType = configValues.findAlt.displayCard[type]  //enum("large","medium","small")
  const data = {
    title, desc, img
  }

  let el;

  switch (type) {
    case "Brittany":
      el = <Brittany data={data} />
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