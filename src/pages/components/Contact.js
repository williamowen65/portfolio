import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactStyled>
      <h2>Contact me</h2>
      <p>
        I am currently looking for job
        opportunities.{" "}
      </p>
      <div
        className="card"
        id="contactCard"
      >
        <h2>William Owen</h2>
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
        </ul>
        <p>
          Visit{" "}
          <a href="https://www.wowebdev.com">
            {" "}
            WOWebDev.com
          </a>
        </p>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  .card {
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
