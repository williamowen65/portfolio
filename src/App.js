import React, { useEffect, useMemo, useRef } from 'react'
import Home from './pages/Home.js'
import { Navigate, Route, Routes } from 'react-router-dom'
// import Navbar from './layouts/Navbar.js'
import Login from './pages/Login.js'
import Features from './pages/Features.js'
import styled from 'styled-components'
import Header from './layouts/header/Header.js'
import PageContainer from './layouts/PageContainer.js'
import configValues from './data/configValues.json'
import MainContainer from './layouts/MainContainer.js'
import useDimensions from 'react-use-dimensions'
import { useDispatch, useSelector } from 'react-redux'
import { setScreenWidth } from './context/appReducer.js'
import PageNotFound from './pages/PageNotFound.js'
import About from './pages/About.js'
import gsap from '../gsap/gsap.min.js'
import Palette from './utils/Palette.js'
// import GSDevTools from 'gsap/GSDevTools'
// gsap.registerPlugin(GSDevTools)
import Footer from './layouts/footer/Footer.js'
import DownArrow from './assets/downArrow.png'
import Sidebar from './layouts/sidebar/Sidebar.js'

import "./styles/global.scss"

export default function App(props) {
  const dispatch = useDispatch()
  const [ref, { x, y, width }] = useDimensions()
  const screenWidth = useSelector(state => state.app.screenWidth)

  useEffect(() => {
    dispatch(setScreenWidth(width))
  }, [width])






  return (
    <Div className="App" ref={ref}>
      {configValues.breakpoints.mainWidth < screenWidth && (
        <>
          <Sidebar right />
          <Sidebar left />
        </>
      )}
      <PageContainer >
        <Header />
        <MainContainer className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            {configValues.specialFeatures.auth && <Route path="/auth" element={<Login />} />}
            {configValues.specialFeatures.showFeatures && <Route path='/features' element={<Features />} />}
            <Route path={"/about"} element={<About />} />
            <Route path="*" element={(() => {
              return (
                <Navigate to="/" replace={true} />
              )
            })()}>
            </Route>
          </Routes>
          {configValues.specialFeatures.showPalette && true && <Palette />}
        </MainContainer>
        <Footer style={{ order: 5 }} />
      </PageContainer>
    </Div>
  )
}

const Div = styled.div`
  /* background-color: ${configValues.theme.dark.background.color.window}; */
  background: linear-gradient(45deg, #2a57bb5c 10%, #99aad047 20%),linear-gradient(45deg, #1b1f28, #1b1f28);
  display: flex;
  justify-content: space-evenly;
  word-spacing: 4px;
  letter-spacing: 1px;
  h1,h2,h3,h4,h5,h6 {
    color: ${configValues.theme.dark.color.main}
  }
  h2 {
    font-size: 37px;
  }
  main {
    z-index: 3;
    order: 2;
    /* margin: 20px; */
    background-color: ${configValues.theme.dark.background.color.main};
  }
  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  p, a, a.active, ul, nav {
    color: ${configValues.theme.dark.color.main};
  }
  .sidebar{
    
    display: none;
    &.right {
      order:3

    }
  }
  .downArrow{
    filter: contrast(0) hue-rotate(21deg) opacity(0.9) sepia(1);
    width: 40px;
    &.right {
    }
  }


`
