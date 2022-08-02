import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header({ children }) {
  return (
    <HeaderStyle>
      <Link to='/'>
        <h1>{children}</h1>
      </Link>
      <Navbar />
    </HeaderStyle>
  )
}

export default Header


import img from '../assets/test.jpg'
const HeaderStyle = styled.header`
 

  padding: 20px;
  background-image: url(${img});
  h1 {
    color: white;
    text-shadow: 0 0 5px black;
  }

`