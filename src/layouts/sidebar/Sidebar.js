import React from 'react'
import styled from 'styled-components'
import configValues from '../../data/configValues.json'
import { useSelector } from 'react-redux'
import { BsArrowDown } from 'react-icons/bs'

export default function Sidebar({ left, right }) {

  const screenWidth = useSelector(state => state.app.screenWidth)

  const SidebarStyled = styled.div`
  /* display: ${configValues.breakpoints.mainWidth > screenWidth ? 'none' : 'flex'}; */
  display: flex;
  ${right && ("order:3")};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100vh;
`


  return (
    <SidebarStyled>
      <BsArrowDown style={{ position: 'fixed' }} size={60} color={configValues.theme.dark.color.highlight}></BsArrowDown>
    </SidebarStyled>
  )
}