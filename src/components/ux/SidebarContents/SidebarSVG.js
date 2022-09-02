import React, {
  useEffect,
  useRef,
} from "react";
import * as d3 from "d3";

function SidebarSVG({ cName }) {
  const svg = useRef();

  const pathGen = d3.path();
  pathGen.moveTo(0, 0);
  pathGen.lineTo(0, 700);
  pathGen.closePath();

  return (
    <svg
      className={cName}
      ref={svg}
      style={{
        overflow: "visible",
        width: 1,
        height: 1,
      }}
    >
      <path
        d={pathGen}
        stroke="black"
        strokeWidth={2}
      />
    </svg>
  );
}

export default React.memo(SidebarSVG);
