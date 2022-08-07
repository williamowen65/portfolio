import React from 'react'
import styled from 'styled-components'
import configValues from '../../data/configValues.json'
import { useSelector } from 'react-redux'

export default function Sidebar() {

  const screenWidth = useSelector(state => state.app.screenWidth)

  const SidebarStyled = styled.div`
  display: ${configValues.breakpoints.slim > screenWidth ? 'none' : 'block'};
`
  return (
    <SidebarStyled>
      <p>test</p>
    </SidebarStyled>
  )
}