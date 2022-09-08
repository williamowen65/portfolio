import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import configValues from "../../../../../../data/configValues.json";
import { useRef } from "react";
import { GrClose } from "react-icons/gr";

export default function FirstCard() {
  const kayakPic =
    "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/241370100_10223121600261531_6198239796508220196_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M_GbXTiAph4AX9J9wMK&_nc_ht=scontent-sea1-1.xx&oh=00_AT-_BMPLZDpX4cTrqOJm3BfrqHn3zbYpzFkGaBVC0SM-Vw&oe=631DCDE0";

  const webDevPic =
    "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/302085057_10225037046066479_347752878933419272_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ICVasttexKYAX8P4IM4&_nc_ht=scontent-sea1-1.xx&oh=00_AT_D84gdgQS9kdNuBTuwbWDqtJMvb-gO-XIGHhMJtk6PKg&oe=631E7305";

  const slideTwo = useRef();

  const handleClick = (e) => {
    e.stopPropagation();
    slideTwo.current.classList.toggle(
      "active"
    );
  };

  return (
    <FirstCardStyled>
      <div
        className="card"
        // ref={}
      >
        <div
          className="slide one"
          onClick={handleClick}
        >
          <h3>
            From Kayak Guide to Web
            Developer
          </h3>
          <div className="content">
            <div className="imgContainer">
              <img
                className="coverPhoto"
                src={kayakPic}
                alt=""
              />
            </div>
            <HiArrowNarrowRight
              size={30}
              color={
                configValues.theme.dark
                  .color.main
              }
            />
            <div className="imgContainer">
              <img
                className="coverPhoto"
                src={webDevPic}
                alt=""
                style={{
                  translate: "0 -50px",
                }}
              />
            </div>
          </div>
          <p>
            A freelance approach to
            switching careers
          </p>
          {/* <button>Learn More</button> */}
        </div>

        <a
          className="slide two"
          ref={slideTwo}
          href="#firstStory"
        >
          <GrClose
            size={30}
            className="close"
            onClick={handleClick}
          />
          <h2>MARK DOWN TEXT</h2>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing
            elit. Repellendus illum aut
            perferendis vero fugit
            possimus asperiores sunt
            dolorum ullam doloremque.
            Aliquid vel dolor maxime in
            nam, voluptas architecto
            eveniet, dolores similique
            nisi error autem aliquam
            deleniti. Aliquam,
            perferendis animi nam
            dolore, suscipit magnam,
            accusantium natus sunt sit
            magni aperiam modi. Lorem
            ipsum dolor sit amet
            consectetur, adipisicing
            elit. Dignissimos rem dolor
            similique impedit tenetur.
            Maxime dolore vero ullam
            adipisci. Exercitationem
            nisi consequuntur suscipit
            illum repellendus, nulla
            reprehenderit ad. Ipsum nam,
            aliquam ipsam optio sapiente
            voluptates est asperiores
            amet repellendus explicabo
            nobis iste voluptatibus iure
            inventore praesentium
            molestiae, commodi ducimus
            dignissimos.
          </p>
        </a>
      </div>
    </FirstCardStyled>
  );
}

const FirstCardStyled = styled.div``;
