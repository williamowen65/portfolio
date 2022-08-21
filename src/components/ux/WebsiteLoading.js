import gsap from "../../../gsap/gsap.min";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import styled from "styled-components";
import WO from "../../layouts/components/WO";
import * as d3 from "d3";
import { useSelector } from "react-redux";

export default function WebsiteLoading() {
  const comp = useRef();

  const screenWidth = useSelector(
    (state) => state.app.screenWidth
  );

  useEffect(() => {
    async function apply() {
      const tl = gsap.timeline();
      await tl
        .set("html", {
          scrollBehavior: "none",
        })
        .to(
          comp.current,
          {
            opacity: 0,
            duration: 0.3,
            onStart: () => {
              window.scrollTo(0, 0);
            },
          },
          "<4"
        )
        .set("html", {
          scrollBehavior: "smooth",
        });
    }

    // apply().then(() => {
    //   comp.current.remove();
    // });
  }, []);

  return (
    <WebsiteLoadingStyled ref={comp}>
      <Animation />
    </WebsiteLoadingStyled>
  );
}

const Animation = () => {
  const screenWidth = useSelector(
    (state) => state.app.screenWidth
  );

  useEffect(() => {
    function handleArcGen(d) {
      var arcGen = d3.path();
      // arcGen.moveTo(d.r, 0);
      arcGen.arc(
        0,
        0,
        d.r,
        d.start,
        d.end,
        d?.options?.anticlockwise
      );
      return arcGen;
    }

    const calcWidth = d3
      .scaleLinear()
      .domain([350, 900])
      .range([100, 400])
      .clamp(true);
    if (screenWidth) {
      // alert(
      //   "scaled" +
      //     calcWidth(screenWidth)
      // );
      // alert(
      //   "screen width " + screenWidth
      // );
      const curves = [
        {
          r: calcWidth(screenWidth), //100
          start: -Math.PI / 2,
          end: Math.PI / 4,
          offset: 2 * 360,
        },
        {
          r: calcWidth(screenWidth), //120
          start: 0,
          end: Math.PI / 2,
          end: Math.PI,
          offset: 3 * 360,
        },
        {
          r: calcWidth(screenWidth), //150
          start: Math.PI / 10,
          end: Math.PI - Math.PI / 5,
          offset: 2 * 360,
        },
        // {
        //   r: 400,
        //   start: Math.PI * 1.25,
        //   end: -Math.PI / 4,
        //   offset: 1 * 360,
        // },
        {
          r: calcWidth(screenWidth), ///395
          start: Math.PI * 1.25,
          end: -Math.PI / 4,
          offset: 1 * 360,
        },
        {
          r: calcWidth(screenWidth), //400
          start: -Math.PI * 1.25,
          end: Math.PI / 4,
          offset: 1 * 360,
        },
      ];
      // const spinSpeed = d3.scaleLinear().range([0, 10]).domain()

      const g = d3
        .select(".animation_container")
        .selectAll("svg.circle")
        .data(curves)
        .join("svg")
        .classed("circle", true)
        .attr("width", 500)
        .attr("height", 500)
        .attr("data-id", (d) => d.r)
        .append("path")
        .classed("line", true)
        .attr(
          "transform-origin",
          (d) => `${d.r} 00`
        )
        .attr("d", (d) =>
          handleArcGen(d)
        )
        .attr("fill", "transparent")
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .call((d, i, nodes) => {
          // alert("hi");

          const svgCircle =
            document.querySelectorAll(
              "svg.circle"
            );

          svgCircle.forEach(
            (svg, i) => {
              const tl =
                gsap.timeline();
              tl.fromTo(
                svg,
                {
                  rotate:
                    curves[i].offset,
                },
                {
                  rotate: curves[i].end,
                  duration: 5,
                  ease: "linear",
                  stagger: {
                    // wrap advanced options in an object
                    each: 0.5,
                    // from: "center",
                    // grid: "auto",
                    // ease: "power2.inOut",
                    repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
                  },
                }
              );
            }
          );
        });

      // TEXT CURVE

      //Create the SVG
      var svg = d3
        .select(".animation_container")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

      function textPath(d) {
        const arc = d3.path();
        arc.arc();
      }

      //Create an SVG path (based on bl.ocks.org/mbostock/2565344)
      svg
        .selectAll("path")
        .data([
          {
            r: 300,
            start: Math.PI,
            end: Math.PI - Math.PI / 30,
            offset: 1 * 360,
            style: {
              stroke: "transparent",
            },
            id: "wavy",
          },
          {
            r: 323,
            start: Math.PI,
            end: 0,
            offset: 1 * 360,
            style: {
              stroke: "transparent",
            },
            id: "wavy2",
            options: {
              anticlockwise: true,
            },
          },
          {
            r: 295,
            start: -Math.PI,
            end: Math.PI,
            offset: 1 * 360,
            style: {
              stroke: "black",
            },
          },
          {
            r: 340,
            start: -Math.PI,
            end: Math.PI,
            offset: 1 * 360,
            style: {
              stroke: "black",
            },
          },
        ])
        .join("path")
        .attr("id", (d) => d.id) //Unique id of the path
        .attr("d", handleArcGen) //SVG path
        .style("fill", "none")
        .style(
          "stroke",
          (d) => d.style.stroke
        );

      //Create an SVG text element and append a textPath element
      svg
        .append("text")
        .append("textPath") //append a textPath to the text element
        .attr("xlink:href", "#wavy") //place the ID of the path here
        .style("text-anchor", "middle") //place the text halfway on the arc
        .attr("startOffset", "25%")
        .attr("font-size", 50)
        .text(
          "WEB DEVELOPMENT PORTFOLIO"
        );
      svg
        .append("text")
        .append("textPath") //append a textPath to the text element
        .attr("xlink:href", "#wavy2") //place the ID of the path here
        .style("text-anchor", "middle") //place the text halfway on the arc
        .attr("startOffset", "50%")
        // .attr("side", "right")
        .attr("font-size", 20)
        .text(
          "william.owen.dev@gmail.com"
        );
      return () => {
        // lines.remove();
        g.remove();
        svg.remove();
      };
    }
  }, [screenWidth]);
  return (
    <span className="animation_container">
      {/* <svg id="animation"></svg> */}
      <WO />
    </span>
  );
};

const WebsiteLoadingStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .animation_container {
    position: absolute;
    /* overflow: visible; */
    /* top: 50%;
    left: 50%; */
    transform: translate(-50%, -50%);
    svg {
      width: 1px;
      box-shadow: 0px 0px 4px black;
      height: 1px;
      overflow: visible;
      position: fixed;
      top: 50%;
      left: 50%;
      /* fill: transparent; */
      transform-origin: center center !important;
      .dot {
        width: 50px;
        height: 50px;
        overflow: visible;
        fill: blue;
      }
      .dots {
        transform: translate();
      }
    }
    /* width: 100vw; */
  }
`;
