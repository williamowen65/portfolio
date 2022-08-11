import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

export default function InfiniteCarousel({ children, containerStyles, childrenStyles, animation, play }) {

  const container = useRef(null)

  useEffect(() => {
    if (container.current) {
      console.log(container);
      const children = Array.from(container.current.children)



      children.forEach(child => {

        if (childrenStyles) {

          for (let [key, value] of Object.entries(childrenStyles)) {
            child.style[key] = value
          }
        }

        play && animation && gsap.to(child, animation)
      })

    }
  }, [container.current])


  return (
    <InfiniteCarouselStyled style={containerStyles} ref={container} >
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