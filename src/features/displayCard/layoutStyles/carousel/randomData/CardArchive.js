import React from 'react'
import styled from 'styled-components'
import Card, { idGen } from './CardArchiveSetup.js'

import * as A from './Attributes.js'







export const allCards = [
  (() => {

    const UniqueCardStyle = styled.div`
 
      h4 {
        color: red !important
      }
      code{
        text-align: left !important;
        display: flex !important;
        flex-direction: column !important;
        code {
          transform: translateX(50px);
        }
        p {
          margin: 0 auto !important;
          user-select: text !important;
        }
      }
    `
    return (<Card
      title="Welcome to <br/> Outside Games"
      imgSrc={(<img
        src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
        style={{

        }}
      />)}
      pretext="Are you up for a challenge?"
      attributes={[A.STRENGTH, A.ENDURANCE]}
      link={"https://github.dev/williamowen65/og/blob/main/src/features/displayCard/layoutStyles/carousel/randomData/CardArchive.js"}
      callToAction="Accept"
      id={idGen.next().value}
    >
      <UniqueCardStyle>

        <h4>First Challenge</h4>
        <p>Create 5 cards!</p>
        <p>Follow the link and commit your changes.</p>
        <p>That's it. </p>

        <hr />
        <h5>Card component template</h5>
        <code>

          <p>&lt;<b>Card</b></p>
          <span style={{ transform: 'translateX(18px)' }}>

            <p><b>title</b>="Title Of Card"</p>
            <p><b>imgSrc</b>={`{(<img
    src='https://image_url'
    />
    )}`}</p>
            <p><b>pretext</b>="text on front of card"</p>
            <p><b>attributes</b>=[A.STRENGTH, A.APTITUDE]</p>
            <p><b>link</b>="url for call to action and the little earth logo"</p>
            <p><b>callToAction</b>="This is the button text on a focused card"</p>
            <p><b>id</b>={`{`}idGen.next().value{"}"}</p>
            <p>&gt;</p>
            <code>
              &lt;h4&gt;Inside card title&lt;/h4&gt; <br />
              &lt;p&gt;Any card instructions&lt;/p&gt;<br />
              &lt;p&gt;Add multiple paragraphs&lt;/p&gt;<br />
              &lt;p&gt;Explore W3Schools for more html info&lt;/p&gt;<br />
              &lt;p&gt;Customize the inside of the card with CSS. <br />See this card's code as an example&lt;/p&gt;<br />
            </code>
          </span>
          <p>&lt;/<b>Card</b>&gt;</p>
        </code>


      </UniqueCardStyle>
    </Card >)
  })(),




  <Card
    title="Some Card"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1657299156791-44140a28a518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={[A.STEALTH, A.VIRTUE]}
    link={"http://www.example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Header</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ab accusamus nisi labore libero quis natus distinctio repellat placeat recusandae.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ab accusamus nisi labore libero quis natus distinctio repellat placeat recusandae.</p>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ab accusamus nisi labore libero quis natus distinctio repellat placeat recusandae.</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"http://www.example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"http://www.example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"http://www.example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"http://www.example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"http://www.example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
]









// const Card = styled.div`

// `

// const Title = styled.div`

// `