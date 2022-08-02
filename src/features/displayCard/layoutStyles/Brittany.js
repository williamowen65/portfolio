import React, { useState } from 'react'
import styled from 'styled-components'
import img from '../assets/random.jpg'
import configValues from '../../../data/configValues.json'
import InnerContainer from '../../../layouts/InnerItems'
import { useSelector } from 'react-redux'
import { Gi3DMeeple, GiAbstract001 } from 'react-icons/gi'

export default function Brittany({ data }) {
  const screenWidth = useSelector(state => state.app.screenWidth)
  const [imgGrayScale, setImgGrayScale] = useState(false)
  // const iconStyle = {
  //   cursor: "pointer"
  // }
  // console.log(data);

  return (
    <InnerContainer>

      <BrittanyStyled screenWidth={screenWidth}>
        <div className={screenWidth > configValues.breakpoints.slim ? "header" : "header mobile"}>
          <span className="pre">Feature Project</span>
          <span className={screenWidth > configValues.breakpoints.slim ? "title" : "title mobile"} onMouseOver={() => setImgGrayScale(!imgGrayScale)}>{data.title}</span>
          <span className="emptySpace"></span>
        </div>
        <ImgDiv src={data.img} className={screenWidth > configValues.breakpoints.slim ? "imgWrapper" : "imgWrapper mobile"} />
        <div className={screenWidth > configValues.breakpoints.slim ? "content" : "content mobile"}>
          <div className={screenWidth > configValues.breakpoints.slim ? "desc" : "desc mobile"}>
            <p>{data.desc}</p>
          </div>
          <div className={screenWidth > configValues.breakpoints.slim ? "links" : "links mobile"}>

            <div className="linkss">
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </div>
            <div className="social">
              <i>
                <Gi3DMeeple size={"30px"} color={"#ffffff"} />
              </i>
              <i>
                <GiAbstract001 size={"30px"} color={"#ffffff"} />
              </i>
            </div>
          </div>
        </div>
      </BrittanyStyled>
    </InnerContainer >
  )
}

// const factor = 
const ImgDiv = styled.div`
  background-image: url(${props => props.src}) !important;
  /* border-radius: 50% !important; */

`

const BrittanyStyled = styled.article`
  color: black;
  display: grid;
  grid-template-columns: 1fr 20fr 5.1fr 10fr 1fr;//2087
  grid-template-rows: 50px 85px 53px 53px 127px;//660
  .header {
    grid-column: 4/6;
    grid-row: 2;
    text-align: right;
    display: flex;
    flex-direction: column;
    &.mobile{
      z-index: 3;
      grid-column: 1/6;
      text-align: center;
    }
    .pre {
      color: ${configValues.theme.dark.color.highlight}
    }
    .title {
      cursor: pointer;
      font-size: 30px;
      color: ${configValues.theme.dark.color.main};
      width: fit-content;
      margin-left: auto;
      &:hover {
        color: ${configValues.theme.dark.color.highlight_2};
      }
      &.mobile {
        margin: auto;
      }
    }
  }
  .imgWrapper {
    grid-column: ${props => props.screenWidth > configValues.breakpoints.slim ? "1/4" : "1/6"};
    height: 370px;
    overflow: hidden;
    border-radius: 4px;
    /* background: url(${img}); */
    background-size: cover;
    box-shadow: 0px 0px 9px black inset;
    filter: grayscale(1);
    z-index: 0;
    transform: filter 0.3s;
    cursor: pointer;
    filter: drop-shadow(0.50em 0.50em 0.3em) grayscale(1);
    &:hover {
      filter: grayscale(0) drop-shadow(0.50em 0.50em 0.3em);
    }
    &.mobile{
      /* box-shadow: 1px 1px 9px black inset; */
      filter: drop-shadow(0.50em 0.50em 0.3em) hue-rotate(159deg);
    }
  }
  .content {
    grid-column: 3/6;
    grid-row: 3/6;
    display: flex;
    flex-direction: column;
    /* background-color: blue; */
    justify-content: space-between;
    &.mobile {
      grid-column: 2/5;
    }
    .links{
      text-align: right;
      &.mobile {
        z-index: 5;
        text-align: center;
      }
      .linkss {
        a {
          margin-left:15px;
          color: ${configValues.theme.dark.color.main};
        }
      }
    }
    i{
      cursor: pointer;
      margin-left: 10px;
      margin-top:10px;
    }
    .desc {
      box-shadow: 1px 1px 6px black;
      background-color: ${configValues.theme.dark.background.color.window};
      min-height: 100px;
      border-radius: 5px;
      z-index: 2;
      text-align: right;
      &.mobile {
        text-align: center;
      }
      p {
        margin: 14px 18px;
      }
    }
  }
`