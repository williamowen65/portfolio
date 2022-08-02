import React from 'react'

function Bitmap() {

   const triangle = 'H 200 L 150 20 L 100 90 '

   const createTriangles = (factor) => {

      const arr = new Array(factor).fill('hi')

      const str = arr.reduce((prev, curr, i) => {
         return prev + ` H ${0 + (100 * i)} L ${50 + (100 * i)} 20 L ${100 + (100 * i)} 90  `
      }, '')


      return str
   }

   // console.log("create Triangels", "M 0 0 V 90 " + createTriangles(30) + " H 5000 L 0 0");
   // console.log('hi');
   return (

      <svg
         width="0"
         height="0"
         viewBox="0 0 198.02979 33.222287"
         version="1.1"
         id="svg2562">

         <defs
            id="defs2559" />
         {/* <g
            id="layer1"
            transform="translate(-0.53288134,-2.0090715)"> */}
         <clipPath id="one">
            <path
               // id="path1523"
               style={{
                  // "stroke:#ffff00;stroke-width:7.66501;stroke-opacity:0.952756;stop-color:#000000"
                  fill: 'black'
               }}
               className="UnoptimicedTransforms"
               // d={"M 0 0 H 5000 V 90 " + triangle + "H 0 L 0 0"}
               d={"M 0 0 V 90 " + createTriangles(30) + " H 5000 V 0 L 0 0"}
            />
         </clipPath>
         {/* </g> */}
      </svg >

   )
}

export default Bitmap