import React, { useEffect, useMemo, useRef } from 'react'
import Home from './pages/Home.js'
import { Navigate, Route, Routes } from 'react-router-dom'
// import Navbar from './layouts/Navbar.js'
import Login from './pages/Login.js'
import Features from './pages/Features.js'
import styled from 'styled-components'
import Header from './layouts/Header.js'
import PageContainer from './layouts/PageContainer.js'
import configValues from './data/configValues.json'
import MainContainer from './layouts/MainContainer.js'
import useDimensions from 'react-use-dimensions'
import { useDispatch } from 'react-redux'
import { setScreenWidth } from './context/appReducer.js'
import PageNotFound from './pages/PageNotFound.js'
import About from './pages/About.js'
import gsap from '../gsap/gsap.min.js'
// import GSDevTools from 'gsap/GSDevTools'
// gsap.registerPlugin(GSDevTools)

export default function App(props) {
  const dispatch = useDispatch()
  const [ref, { x, y, width }] = useDimensions()

  useEffect(() => {
    dispatch(setScreenWidth(width))
  }, [width])



  // useRef(GSDevTools.create())
  // useEffect(() => {
  //   GSDevTools.create()
  // }, [])

  // useMemo(() => {}, )

  return (
    <Div className="App" ref={ref}>
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
        </MainContainer>
      </PageContainer>
    </Div>
  )
}

const Div = styled.div`
  background-color: ${configValues.theme.dark.background.color.window};
  main {
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

`
