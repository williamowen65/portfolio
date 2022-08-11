import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import configValues from '../data/configValues.json'
import { CgClose } from 'react-icons/cg'

export default function Palette({ type = 'dark' }) {


  const colors = configValues.theme[type]

  // console.log(Object.entries(colors));

  function recursiveObjectOrPrintValue(obj) {
    return Object.entries(obj).map(([key, value], i) => {
      if (typeof value === 'object') {
        return recursiveObjectOrPrintValue(value)
      }
      return (
        <>
          <p key={i}>{key}: {value} <span className='color' style={{ backgroundColor: value }}></span></p>
          |
        </>
      )
      // console.log(key, value)
    })
  }

  const handleClick = (e) => {
    setShow(!show)
  }

  const [show, setShow] = useState(false)

  useEffect(() => {
    let state = false
    const ev = window.addEventListener("keypress", (e) => {
      // console.log(e);
      e.stopImmediatePropagation()
      // alert(show)
      if (e.key === 'P' && e.shiftKey === true) {
        state = !state
        state ? setShow(state => false) : setShow(state => true)
      }
    })

    return () => {
      // window.removeEventListener("keypress", ev, () => { })
    }
  }, [show])


  if (show) {

    return (
      <NameStyled>

        <CgClose onClick={handleClick} />
        <p>Theme: {type}</p>
        {[recursiveObjectOrPrintValue(colors)]}
      </NameStyled>
    )
  }

  return null
}

const NameStyled = styled.div`
position: fixed;
    /* top: 0; */
    left: 0;
    bottom: -1px;
    background: white;
    padding-bottom: 10px;
    z-index: 10000;
    overflow-y: scroll;
    align-items: end;
    display: flex;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    color: black;
    font-size: 12px;
  p{
    color: black !important;
    /* display: inline-block; */
    .color {
       width: 50px;
       height: 50px;
       display: block;
       padding: 0 5px;
    }
  }
`