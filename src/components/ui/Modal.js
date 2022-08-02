import React from 'react'
import styled from 'styled-components'

export default function Modal({ children, close }) {
  return (

    <ModalStyle onClick={() => close()}>
      <div className="innerContainer" >
        {children}
      </div>
    </ModalStyle >
  )
}

const ModalStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: transparent;
  .innerContainer {
    z-index: 2;
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    width: 500px;
    height: 500px;
    background-color: blue;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }
`