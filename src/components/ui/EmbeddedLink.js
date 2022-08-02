import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import configValues from '../../data/configValues.json'
import Modal from './Modal'

export default function EmbeddedLink({ href = "no", children, type, modalContent }) {

  const [modal, setModal] = useState(true)


  switch (type) {
    case 'popup':
      if (!modalContent) return (<p>embeddedForm missing modal</p>)
      return (
        <span onClick={() => setModal(true)}>
          <A>{children}</A>
          {/* {modal && <Modal close={() => setModal(false)} modalContent={modalContent} />} */}
        </span>
      )
    case 'link':
      return (
        <Link to={href}>
          <A>{children}</A>
        </Link>
      )
    default:
      return (
        <p style={{ color: 'red' }}>Undefined embeddedLink warning</p>
      )
      break;
  }
}

const A = styled.span`
    color: ${configValues.theme.dark.color.highlight};
    text-decoration: none;
    position: relative;
  white-space: nowrap;
  cursor: pointer;

  &:after{
    transition: width 0.3s;
    content: "";
    position: absolute;
    bottom: -2px;
    left:   0;
    background: ${configValues.theme.dark.color.highlight};
    height: 1.5px;
    opacity: 0.3;
    width: 20px;
  }
  &:hover{
    &:after{
     width: 100%; 
     opacity: 1;

    }
  }
  &:active {
    width: 100%; 
     opacity: 1;
  }
`
