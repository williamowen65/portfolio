import React, {
  useEffect,
} from "react";
import styled from "styled-components";
import {
  HiArrowNarrowRight,
  HiArrowNarrowDown,
} from "react-icons/hi";
import configValues from "../../../../../../data/configValues.json";
import { useRef } from "react";
import { GrClose } from "react-icons/gr";
import markdown from "./markdown.md";
import ConvertStringToHTML from "../../../../../../utils/stringToHTML";
import { useSelector } from "react-redux";

// console.log(markdown);
// import { Remarkable } from "remarkable";

// const md = new Remarkable();

// console.log(md.render(markdown));

export default function FirstCard() {
  const screenWidth = useSelector(
    (state) => state.app.screenWidth
  );

  const kayakPic =
    "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/241370100_10223121600261531_6198239796508220196_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M_GbXTiAph4AX9J9wMK&_nc_ht=scontent-sea1-1.xx&oh=00_AT-_BMPLZDpX4cTrqOJm3BfrqHn3zbYpzFkGaBVC0SM-Vw&oe=631DCDE0";

  const webDevPic =
    "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/302085057_10225037046066479_347752878933419272_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ICVasttexKYAX8P4IM4&_nc_ht=scontent-sea1-1.xx&oh=00_AT_D84gdgQS9kdNuBTuwbWDqtJMvb-gO-XIGHhMJtk6PKg&oe=631E7305";

  const slideOne = useRef();
  const slideTwo = useRef();

  const handleClick = (e) => {
    e.stopPropagation();
    // slideTwo.current.classList.toggle(
    //   "active"
    // );

    if (
      parseInt(
        slideTwo.current.style.height
      )
    ) {
      slideTwo.current.style.height = 0;
    } else {
      const slideOneHeight =
        getComputedStyle(
          slideOne.current
        ).height;
      slideTwo.current.style.height =
        slideOneHeight;
    }
  };

  useEffect(() => {
    if (slideTwo.current) {
      slideTwo.current.querySelector(
        ".content"
      ).innerHTML = markdown;
    }
  }, [slideTwo.current]);

  const ContentStyled = styled.div`
    ${screenWidth <
      configValues.breakpoints.mobile &&
    `flex-direction: column;
      height: 475px;
    `}
    .thinkingMan {
      font-size: 101px;
    }
  `;

  const CardStyled = styled.div``;

  const earth = useRef();

  useEffect(() => {
    if (earth.current) {
      var svg = d3.select(".earth"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

      const config = {
        speed: 0.01,
        verticalTilted: -10,
        horizontalTilted: 0,
      };

      // The orthographic Earth projection
      // Center(0,0) and no rotation
      var projection = d3
        .geoOrthographic()
        .center([0, 0])
        .scale(250)
        .clipAngle(90)
        .translate([
          width / 2,
          height / 3,
        ])
        .rotate([110, -40]);

      const path = d3
        .geoPath()
        .projection(projection);

      // Calling rotate() function for rotation of globe
      Rotate();

      // Loading data from json
      d3.json(
        "https://raw.githubusercontent.com/" +
          "epistler999/GeoLocation/master/world.json",
        function (data) {
          // Draw the map
          svg
            .append("g")
            .selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("fill", "grey")
            .attr(
              "d",
              d3
                .geoPath()
                .projection(projection)
            )
            .style("stroke", "#ffff");
        }
      );

      // Function to rotate() projection of globe.
      function Rotate() {
        d3.timer(function (elapsed) {
          projection.rotate([
            config.speed * elapsed -
              120,
            config.verticalTilted,
            config.horizontalTilted,
          ]);
          svg
            .selectAll("path")
            .attr("d", path);
        });
      }
    }
  }, [earth.current]);

  return (
    <CardStyled>
      <div
        className="card"
        // ref={}
      >
        <div
          className="slide one"
          onClick={handleClick}
          ref={slideOne}
        >
          <h3>
            {/* A Glimpse Into my Mind */}
            Awesome Web Development
            Plans
          </h3>
          <ContentStyled className="content">
            <svg
              width="500"
              height="300"
              ref={earth}
              className="earth"
            ></svg>
          </ContentStyled>
          <p>
            And open to collaboration!
          </p>
          {/* <button>Learn More</button> */}
        </div>

        <div
          className="slide two"
          ref={slideTwo}
        >
          <GrClose
            size={30}
            className="close"
            onClick={handleClick}
          />
          <div className="content"></div>
        </div>
      </div>
    </CardStyled>
  );
}

/* 

<html lang="en"> 

<head> 
<meta charset="UTF-8" /> 
<meta name="viewport" content=
"width=device-width,initial-scale=1.0" /> 
<script src="https://d3js.org/d3.v4.js"></script> 
<script src=
"https://d3js.org/d3-geo-projection.v2.min.js">
</script>  
</head> 

<body> 
<div> 
<svg width="1200" height="850"> 
            </svg> 
            </div> 
            
            <script> 
            var svg = d3.select("svg"), 
            width = +svg.attr("width"), 
            height = +svg.attr("height"); 
            
            const config = {
              speed: 0.010,
              verticalTilted: -10,
              horizontalTilted: 0
            }
            
            // The orthographic Earth projection 
            // Center(0,0) and no rotation 
            var projection = d3.geoOrthographic()
            .center([0, 0]) 
            .scale(250)
            .clipAngle(90 )
            .translate([width / 2, height / 3]) 
            .rotate([0,0])
            
            const path = d3.geoPath().projection(projection);
            
            // Calling rotate() function for rotation of globe
            Rotate();
            
            // Loading data from json
            d3.json("https://raw.githubusercontent.com/"
            +"epistler999/GeoLocation/master/world.json", 
            function (data) { 
      
                    // Draw the map 
                    svg.append("g") 
                    .selectAll("path") 
                    .data(data.features) 
                        .enter().append("path") 
                        .attr("fill", "grey") 
                        .attr("d", d3.geoPath() 
                        .projection(projection) 
                        ) 
                        .style("stroke", "#ffff") 
                      }) 
                      
                      // Function to rotate() projection of globe.
                      function Rotate() {
                        d3.timer(function (elapsed) {
                          projection.rotate(
                            [config.speed*elapsed-120, 
                              config.verticalTilted, 
                              config.horizontalTilted]);
                              svg.selectAll("path").attr("d", path);
                            });
                          }   
                          </script> 
                          </body>
                          
                          </html>
                          */
