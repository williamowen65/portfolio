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
import { useDispatch } from 'react-redux'
import { setScreenWidth } from './context/appReducer.js'
import PageNotFound from './pages/PageNotFound.js'
import About from './pages/About.js'
import gsap from '../gsap/gsap.min.js'
import Palette from './utils/Palette.js'
// import GSDevTools from 'gsap/GSDevTools'
// gsap.registerPlugin(GSDevTools)
import Footer from './layouts/footer/Footer.js'
import DownArrow from './assets/downArrow.png'

export default function App(props) {
  const dispatch = useDispatch()
  const [ref, { x, y, width }] = useDimensions()

  useEffect(() => {
    dispatch(setScreenWidth(width))
  }, [width])






  return (
    <Div className="App" ref={ref}>
      <img src={DownArrow} alt="" srcset="" className='left downArrow' />
      <img src={DownArrow} alt="" srcset="" className='right downArrow' />
      <PageContainer >
        <Header>Hello world</Header>
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
          {configValues.specialFeatures.showPalette && <Palette />}
        </MainContainer>
        <Footer />
      </PageContainer>
    </Div>
  )
}

const Div = styled.div`
  /* background-color: ${configValues.theme.dark.background.color.window}; */
  background: linear-gradient(45deg, #2a57bb5c 10%, #99aad047 20%),linear-gradient(45deg, #1b1f28, #1b1f28);
  main {
    z-index: 3;
    background-color: ${configValues.theme.dark.background.color.main};
  }
  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  p {
    color: ${configValues.theme.dark.color.main}
  }
  .downArrow{
    filter: contrast(0) hue-rotate(21deg) opacity(0.9) sepia(1);
    width: 40px;
    position: fixed;
    bottom: 0;
    &.left {
      left:6%;
    }
    &.right {
      right: 6%;
    }
  }


`
