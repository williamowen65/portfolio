import React from "react";
import styled from "styled-components";
import { BsShareFill } from "react-icons/bs";

export default function Contact() {
  const iconStyle = {
    position: "absolute",
    right: 0,
  };
  return (
    <ContactStyled>
      <h2>Contact Info</h2>

      <div
        className="card"
        id="contactCard"
      >
        <BsShareFill
          style={iconStyle}
        />
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
                <a href="https://www.wowebdev.com">
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
