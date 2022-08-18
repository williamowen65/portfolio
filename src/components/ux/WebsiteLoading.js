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
    var data = [
      { x: -5, y: 10 },
      { x: 4, y: 0 },
      { x: 7, y: 20 },
      { x: 0, y: 50 },
    ];

    var xScale = d3
      .scaleLinear()
      .domain([0, 7])
      .range([25, 175]);
    var yScale = d3
      .scaleLinear()
      .domain([0, 20])
      .range([175, 25]);

    var line = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    function renderLine(
      id,
      line,
      color,
      data
    ) {
      color =
        color === undefined
          ? "black"
          : color;

      d3.select("#" + id)
        .append("path")
        .attr("d", line(data))
        .attr("fill", "none")
        .attr("stroke", color);

      d3.select("#" + id)
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", (d) => xScale(d.x))
        .attr("cy", (d) => yScale(d.y))
        .attr("r", 4.5)
        .on("click", () => {
          alert("hi");
        })
        .style("cursor", "pointer");
    }

    renderLine(
      "animation",
      line.curve(d3.curveBasisClosed),
      "black",
      data
    );
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg#animation {
      width: 500px;
      height: 500px;
      overflow: visible;
      position: absolute;
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
