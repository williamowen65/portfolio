import React from "react";
import styled from "styled-components";
import { BsShareFill } from "react-icons/bs";
import configValues from "../../data/configValues.json";
import QR from "../../assets/qrcode_www.wowebdev.com.png";

export default function Contact() {
  return (
    <ContactStyled>
      <header>
        <h2>My Contact Info</h2>
        <span className="share">
          <BsShareFill
            color={
              configValues.theme.dark
                .color.main
            }
          />
        </span>
      </header>

      <div
        className="card"
        id="contactCard"
      >
        <img
          src={QR}
          alt=""
          className="qr"
        />
        <span className="title">
          <h2>William Owen</h2>
          <p>
            Full-Stack JavaScript
            Developer
          </p>
        </span>
        <ul>
          <li>
            Contact
            <ul>
              <li>
                <nobr>
                  william.owen.dev
                </nobr>
                @gmail.com
              </li>
              <li>253-514-2990</li>
            </ul>
          </li>
          <li>
            Portfolio
            <ul>
              <li>
                <a href="http://www.wowebdev.com">
                  www.WOWebDev.com
                </a>
              </li>
            </ul>
          </li>
          <li>
            Resume
            <ul>
              <li>PDF download</li>
            </ul>
          </li>
        </ul>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  header {
    h2 {
      font-size: clamp(10px, 6vw, 21px);
    }
  }
  .share {
    width: 30px;
    height: 30px;
    padding: 5px;
    svg {
      transform: translateX(2px);
    }
    &:hover {
      background: ${configValues.theme
        .dark.color.mainOffset + "aa"};

      svg {
        stroke: ${configValues.theme
          .dark.background.color
          .window};
        fill: ${configValues.theme.dark
          .background.color.window};
      }
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .card {
    position: relative;
    .title {
      text-align: center;
      h2 {
        font-size: clamp(
          15px,
          6vw,
          37px
        );
      }
      p {
        color: black !important;
      }
    }
    a {
      color: darkblue !important;
      &:hover {
        text-decoration: underline;
      }
    }
    border: 1px solid black;
    max-width: 400px;
    margin: 20px auto;
    padding: clamp(5px, 6vw, 30px)
      clamp(5px, 6vw, 45px);
    background: aquamarine;
    h2,
    ul li {
      color: black;
    }
    ul {
      list-style-type: none;
      padding-left: 0px;
      li {
        ul {
          padding-left: 40px;
          li {
            text-align: left;
            font-size: clamp(
              3px,
              100%,
              15px
            );
            &::before {
              content: "▶";
              position: relative;
              left: -16px;
              top: 1px;
            }
          }
        }
      }
    }
  }
`;
