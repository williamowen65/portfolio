import React, { useEffect, useState } from 'react'
import Parallax from './layoutStyles/Parallax';
import ParallaxWDS from './layoutStyles/Parallax-wds';
import styled from 'styled-components'
import Udemy from './layoutStyles/Udemy.js'
import configValues from '../../data/configValues.json'
// import Container from '../../layouts/InnerItems';
import MainContainer from '../../layouts/MainContainer.js'
import PageContainer from '../../layouts/PageContainer.js'
// import styled from 'styled-components';
import Border from './parallaxBorders/one.js'
import Bitmap from './parallaxBorders/bitmap.js'

export default function SectionBreak({ type, outerConfig, innerConfig, children, fullLength, backgroundImg, withBorder }) {
  const [isNecessary, setIsNecessary] = useState(null)
  const [dims, setDims] = useState(null)

  function performSetDims(items) {
    let height;

    height = items.reduce((prev, curr) => {

      return prev + parseInt(window.getComputedStyle(items[0]).height)
    }, 0)
    // console.log(document.querySelector('p').clientHeight);

    setDims(height)
  }

  let el;
  switch (type) {
    case 'parallax':
      el = <Parallax />
      break;
    case 'casual':
      break;
    case 'parallax-wds':
      el = <ParallaxWDS />
      break
    case 'udemy':
      if (withBorder) {
        const Bodyy = styled.div`
        background-color: ${configValues.theme.dark.background.color.window};
        height: 100px;
        width: 100%;
        position: absolute;
        top:-3px;
        z-index: 10001;
        /* left: -2px; */
        -webkit-clip-path: url(#one);
        clip-path: url(#one);
        &.bottom {
          transform: rotate(180deg);
          top: 63%;
        }
        .main {
          background-color: ${configValues.theme.dark.background.color.main};
          margin: auto;
          position: absolute;
          top:50px;
        }
        `
        el = (
          <div>
            <Udemy children={children} passAbsoluteParaElsDims={performSetDims} />
            <Bodyy className='body top'>
              <MainContainer style={{ maxWidth: '1200px', margin: 'auto', height: '120px' }} asBorderImg={"paper cut image"}>
              </MainContainer>
              <Bitmap />
            </Bodyy>
            <Bodyy className='body bottom'>
              <MainContainer style={{ maxWidth: '1200px', margin: 'auto', height: '120px' }} asBorderImg={"paper cut image"}>
              </MainContainer>
            </Bodyy>
          </div>
        )
      } else {
        el = <Udemy children={children} passAbsoluteParaElsDims={performSetDims} />
      }
      break
    default:
      break;
  }

  useEffect(() => {
    switch (type) {
      case 'parallax':
        break;
      case 'casual':
        break;
      case 'parallax-wds':
        break
      case 'udemy':
        setIsNecessary(JSON.stringify({
          height: dims
        }))
        break
      default:
        break;
    }
  }, [isNecessary])

  console.log("backgroundImg", backgroundImg);

  return (<>
    <Div fullLength={fullLength} dims={JSON.parse(dims)} backgroundImg={backgroundImg}>
      {el}
    </Div>
    {!!isNecessary && <Divv className="spacer" dims={JSON.parse(dims)}></Divv>}
  </>
  )
}


const factor = 1.5
const Div = styled.div`
    overflow-y: visible;
    overflow-x: hidden;
    height:${props => props.dims * factor}px;
    ${props => props.fullLength && `
      width: 100vw; 
      position: absolute; `
  } 
    left: 0;
    /* background-image: url(${props => props.backgroundImg}); */
    ${props => {
    console.log("props", props);

  }}
  .spacer{
    /* height: 110vh; */
    width: 100vw;
    /* position: absolute;
    top: 50%; */
    }
    /* z-index: -1; */
&::-webkit-scrollbar {
  display: none;
}
`



const Divv = styled.div`
    

    height: ${props => props.dims * factor}px;
    width: 100vw;

`


SectionBreak.Chunk = ({ num }) => {
  const array = new Array(num).fill('hi')
  // console.log(num, array);

  return (
    <>
      {array.map((el, i) => (
        <p data-depth="0.6" key={i} className='parallax-item' style={{ color: 'transparent' }}>test</p>
      ))}
    </>
  )
}