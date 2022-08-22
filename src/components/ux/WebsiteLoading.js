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
  const screenHeight = useSelector(
    (state) => state.app.screenHeight
  );

  const screenLimitingDim =
    screenWidth > screenHeight
      ? screenHeight
      : screenWidth;

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

    const domain = [350, 900];

    const calcWidth = d3
      .scaleLinear()
      .domain(domain)
      // .range([147.5, 200])
      .range([147.5, 400])
      .clamp(true);
    if (screenLimitingDim) {
      // alert(
      //   "screenLimitingDim " + screenLimitingDim
      // );
      // alert(
      //   "screenHeight " + screenHeight
      // );
      // alert(
      //   "scaled" +
      //     calcWidth(screenLimitingDim)
      // );
      // alert(
      //   "screen width " + screenLimitingDim
      // );
      const curves = [
        {
          r:
            calcWidth(
              screenLimitingDim
            ) *
            (100 / 400), //100
          start: -Math.PI / 2,
          end: Math.PI / 4,
          offset: 2 * 360,
        },
        {
          r:
            calcWidth(
              screenLimitingDim
            ) *
            (120 / 400), //120
          start: 0,
          end: Math.PI / 2,
          end: Math.PI,
          offset: 3 * 360,
        },
        {
          r:
            calcWidth(
              screenLimitingDim
            ) *
            (150 / 400), //150
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
          r:
            calcWidth(
              screenLimitingDim
            ) *
            (395 / 400), ///395
          start: Math.PI * 1.25,
          end: -Math.PI / 4,
          offset: 1 * 360,
        },
        {
          r:
            calcWidth(
              screenLimitingDim
            ) *
            (400 / 400), //400
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
        .attr(
          "width",
          screenLimitingDim
        )
        .attr(
          "height",
          screenLimitingDim
        )
        .attr("data-id", (d) => d.r)
        .append("path")
        // .classed("line", true)
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
              const tl = gsap.timeline({
                paused: false,
              });
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
        .selectAll("svg.textPath")
        .attr(
          "width",
          screenLimitingDim
        )
        .attr(
          "height",
          screenLimitingDim
        )

        .data([
          {
            r:
              calcWidth(
                screenLimitingDim
              ) *
              (300 / 400), // 300
            start: Math.PI,
            end: Math.PI - Math.PI / 30,
            offset: 1 * 360,
            style: {
              stroke: "transparent",
            },
            id: "wavy",
          },
          {
            r:
              calcWidth(
                screenLimitingDim
              ) *
              (323 / 400), //323
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
            r:
              calcWidth(
                screenLimitingDim
              ) *
              (295 / 400), //295
            start: -Math.PI,
            end: Math.PI,
            offset: 1 * 360,
            style: {
              stroke: "black",
            },
          },
          {
            r:
              calcWidth(
                screenLimitingDim
              ) *
              (340 / 400), //340
            start: -Math.PI,
            end: Math.PI,
            offset: 1 * 360,
            style: {
              stroke: "black",
            },
          },
        ])
        .join("svg")
        .classed("textPath", true)
        .attr("id", (d) => `${d.id}Svg`)
        .append("path") //Unique id of the path
        .attr("id", (d) => `${d.id}`)
        .attr("d", handleArcGen) //SVG path
        .style("fill", "none")
        .style(
          "stroke",
          (d) => d.style.stroke
        );

      const fontScale = d3
        .scaleLinear()
        .domain(domain)
        .range([25, 50])
        .clamp(true);

      d3.select(".animation_container");
      //Create an SVG text element and append a textPath element
      d3.select("svg#wavySvg")
        .append("text")
        .append("textPath") //append a textPath to the text element
        .attr("xlink:href", "#wavy") //place the ID of the path here
        .style("text-anchor", "middle") //place the text halfway on the arc
        .attr("startOffset", "25%")
        .attr("font-size", () =>
          screenLimitingDim > 750
            ? fontScale(
                screenLimitingDim
              )
            : fontScale(
                screenLimitingDim
              ) * 0.85
        )
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
        .attr(
          "font-size",
          () =>
            fontScale(
              screenLimitingDim
            ) *
            (20 / 50)
        )
        .text(
          "william.owen.dev@gmail.com"
        );

      svg
        .append("text")
        .text("WO")
        .attr("text-anchor", "middle")
        .attr(
          "transform-origin",
          "center center"
        )
        .attr(
          "transform",
          "translate(0,5)"
        )
        .call((d, i, nodes) => {
          // alert("hi");

          const textPath =
            document.querySelectorAll(
              "svg.textPath"
            );
          console.log(textPath);
          textPath.forEach((svg, i) => {
            const tl = gsap.timeline({
              paused: false,
            });
            tl.fromTo(
              svg,
              {
                rotate: 0,
              },
              {
                rotate: 0,
                duration: 15,
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
          });
        });
      return () => {
        // lines.remove();
        g.remove();
        svg.remove();
      };
    }
  }, [screenLimitingDim]);
  return (
    <span className="animation_container">
      {/* <svg id="animation"></svg> */}
      {/* <WO />  */}
    </span>
  );
};

const WebsiteLoadingStyled = styled.div`
  position: fixed;
  overflow-y: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: ${window.innerHeight}px;
  height: 100%;
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
    /* transform: translate(-50%, -50%); */
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
