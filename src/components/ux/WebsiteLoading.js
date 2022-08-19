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
      await gsap.to(
        comp.current,
        {
          opacity: 0,
          duration: 0.3,
          onUpdate: () => {
            window.scrollTo({ top: 0 });
          },
        },
        "<6"
      );
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
        d.end
      );
      // console.log(d, arcGen);
      // arcGen.closePath();
      return arcGen;
    }

    const curves = [
      {
        r: 100,
        start: -Math.PI / 2,
        end: Math.PI / 4,
        offset: 500,
      },
      {
        r: 120,
        start: 0,
        end: Math.PI / 2,
        end: Math.PI,
        offset: 300,
      },
      {
        r: 150,
        start: Math.PI / 10,
        end: Math.PI - Math.PI / 5,
        offset: 4000,
      },
      {
        r: 400,
        start: Math.PI * 1.25,
        end: -Math.PI / 4,
        offset: 200,
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
      .attr("d", (d) => handleArcGen(d))
      .attr("fill", "transparent")
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .call((d, i, nodes) => {
        // alert("hi");

        const lines =
          document.querySelectorAll(
            "svg.circle"
          );

        lines.forEach((line, i) => {
          gsap.fromTo(
            line,
            {
              rotate: curves[i].offset,
            },
            {
              rotate: curves[i].end,
              duration: 3,
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
    };
  }, []);
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
