import React from "react";
import styled from "styled-components";
import { BsShareFill } from "react-icons/bs";
import configValues from "../../data/configValues.json";

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
        <h2>William Owen</h2>
        <p>
          Full-Stack JavaScript
          Developer
        </p>
        <ul>
          <li>
            Contact
            <ul>
              <li>
                william.owen.dev@gmail.com
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
    p {
      color: black !important;
    }
    a {
      color: darkblue !important;
      &:hover {
        text-decoration: underline;
      }
    }
    border: 1px solid black;
    width: 400px;
    margin: 20px auto;
    padding: 30px 45px;
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
          li::before {
            content: "▶";
            position: relative;
            left: -16px;
            top: 1px;
          }
        }
      }
    }
  }
`;
