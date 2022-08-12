import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export default function InfiniteCarousel({ children, containerStyles, childrenStyles, animation, play }) {
  const [containerHeight, setContainerHeight] = useState(null)

  const container = useRef(null)

  useEffect(() => {
    if (container.current) {
      console.log(container);
      const children = Array.from(container.current.children)



      children.forEach(child => {

        if (childrenStyles && containerHeight) {

          for (let [key, value] of Object.entries(childrenStyles)) {
            // console.log(key, child);
            child.style[key] = value
          }
        }

        play && animation && gsap.to(child, { ...animation, y: -parseInt(containerHeight) })
      })

      const data = window.getComputedStyle(container.current)
      console.log(data.height);
      setContainerHeight(data.height)
      // const windowEl = document.querySelector(`.${container.current.classList[0]}`)
      // console.log(windowEl.getComputedStyle());
      // const height = container.current.getComputedStyles()
    }
  }, [container.current, containerHeight])




  return (
    <InfiniteCarouselStyled style={containerStyles} ref={container} className={"random"}>
      {children}
      {children}
      {children}
      {children}
    </InfiniteCarouselStyled>
  )
}

const InfiniteCarouselStyled = styled.div`
  display: flex;

  img {
        width: 100%;
      }
`