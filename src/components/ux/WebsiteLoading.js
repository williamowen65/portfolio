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
        "<4"
      );
    }

    apply().then(() => {
      comp.current.remove();
    });
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
    // var arcGen = d3
    //   .arc()
    //   .innerRadius((d) => d)
    //   .outerRadius((d) => d)
    //   .startAngle((d, i) =>
    //     i % 2 == 0
    //       ? 0
    //       : -Math.PI + Math.PI / 3
    //   )
    //   .endAngle((d, i) =>
    //     i % 2 == 0
    //       ? Math.PI / 3
    //       : -Math.PI
    //   );

    function handleArcGen(d) {
      var arcGen = d3.path();
      arcGen.moveTo(d, 0);
      arcGen.arc(0, 0, d, 0, Math.PI);
      // arcGen.closePath();
      return arcGen;
    }

    const radii = [100, 120, 150, 300];
    // const spinSpeed = d3.scaleLinear().range([0, 10]).domain()

    const g = d3
      .select("#animation")
      .insert("g")
      .classed("circle one", true);

    const lines = g
      .selectAll("path.line")
      .data(radii)
      .join("path")
      .classed("line", true)
      .attr(
        "transform-origin",
        (d) => `${d} 00`
      )
      .attr("d", (d) => handleArcGen(d))
      .attr("fill", "transparent")
      .attr("stroke", "black")
      .attr("stroke-width", 1)

      .call((d, i) => {
        gsap.to(".line", {
          rotate: 360,
          repeat: -1,
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
        });
      });
    console.log("HEEELLL");
    return () => {
      lines.remove();
    };
  }, []);
  return (
    <span className="animation_container">
      <svg id="animation"></svg>
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
    svg#animation {
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
