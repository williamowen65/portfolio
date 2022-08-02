import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import configValues from '../data/configValues.json'

export default function MainContainer({ children, style }) {
  const screenWidth = useSelector(state => state.app.screenWidth)

  return (
    <Main mobile={screenWidth <= configValues.breakpoints.mobile} style={style}>
      {children}
    </Main>
  )
}

const Main = styled.main`
  padding: 30px ${props => props.mobile ? "10px" : "50px"};
  text-align: justify;
  flex-grow: 1;
  transition: all 0.2s;
  
  /* min-height: 126px; */

`


