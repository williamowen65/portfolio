import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import configValues from '../data/configValues.json'

export default function Navbar() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="./">Home</Link>
        </li>
        {configValues.specialFeatures.auth && (<li>
          <Link to="./auth">Login</Link>
        </li>)}
        {configValues.specialFeatures.showFeatures && (<li>
          <Link to="./features">Features</Link>
        </li>)}
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  flex-grow: 1;
  ul {
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      a {
        text-decoration: none;
        color: red;
      }
    }
  }
`