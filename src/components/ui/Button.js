import React from 'react'
import styled from 'styled-components'

const rippleSpeed = [450, 0.45]

export default function Button({ children, onPress, id }) {

  const handleClick = (e) => {
    console.log(e);
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.style.zIndex = 3
    ripples.style.left = x + 'px'
    ripples.style.top = y + 'px'
    e.target.insertAdjacentElement("beforeend", ripples)
    // document.querySelector("button").insertAdjacentHTML("")
    setTimeout(() => {
      ripples.remove()
      onPress(e)
    }, rippleSpeed[0])
  }

  return (
    <ButtonStyle onClick={handleClick} id={id}>{children}</ButtonStyle>
  )
}

const ButtonStyle = styled.button`
  /* background-color: blue; */
  /* border: none; */
  border: none;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 6px 15px;
  margin: 10px 10px 10px 0px;
  background: linear-gradient(90deg, #0162c8, #55e7fc);
  &:hover{
    /* color: white; */
  }
  /* &:focus{
    background-color: blue;
  }  */
  span {
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    z-index: 3;
    animation: animate ${rippleSpeed[1]}s linear infinite;
  }
  @keyframes animate {
    0%{
      width: 0px;
      height: 0px;
      opacity: 0.7;
    }
    100%{
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
`