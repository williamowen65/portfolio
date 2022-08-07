import React from 'react'
import styled from 'styled-components'
import configValues from '../data/configValues.json'
import { CgClose } from 'react-icons/cg'

export default function Palette({ type = 'dark' }) {


  const colors = configValues.theme[type]

  console.log(Object.entries(colors));

  function recursiveObjectOrPrintValue(obj) {
    return Object.entries(obj).map(([key, value], i) => {
      if (typeof value === 'object') {
        return recursiveObjectOrPrintValue(value)
      }
      return (
        <p key={i}>{key}: {value} <span style={{ width: '100px', height: '50px', backgroundColor: value, display: 'block' }}></span></p>
      )
      // console.log(key, value)
    })
  }

  const handleClick = (e) => {
    e.target.parentElement.remove()
  }

  return (
    <NameStyled>

      <CgClose onClick={handleClick} />
      <p>Theme: {type}</p>
      {[recursiveObjectOrPrintValue(colors)]}
    </NameStyled>
  )
}

const NameStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  padding-bottom: 10px;
  p{
    /* display: inline-block; */
  }
`