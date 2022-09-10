import React from "react";
import styled from "styled-components";
import {
  BsShareFill,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import configValues from "../../data/configValues.json";
import QR from "../../assets/qrcode_www.wowebdev.com.png";
import contactCard from "../../assets/card.png";
import {
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";

export default function Contact() {
  return (
    <ContactStyled>
      <header>
        <h2>My Contact Info</h2>
        <span className="share">
          {/* <a
            href="https://www.facebook.com/dialog/share?app_id=873061097006100&display=popup&href=http%3A%2F%2Fwww.WOWebDev.com%2Fdocs%2F&redirect_uri=http%3A%2F%2Fwww.WOWebDev.com%2Ftools%2Fexplorer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsShareFill
              color={
                configValues.theme.dark
                  .color.main
              }
            />
          </a> */}
          {/* <BsShareFill
            color={
              configValues.theme.dark
                .color.main
            }
          /> */}

          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{
              position: "absolute",
              bottom: -16,
              right: 0,
            }}
            direction="left"
            icon={
              <BsShareFill
                color={
                  configValues.theme
                    .dark.color.main
                }
                size={24}
              />
            }
          >
            {/* {actions.map((action) => ( */}
            <SpeedDialAction
              icon={<BsLinkedin />}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "http://www.linkedin.com/shareArticle?mini=true&url=http://www.wowebdev.com/",
                  "linkedin",
                  "left=20,top=20,width=500,height=500,toolbar=1,resizable=0"
                );
                return false;
              }}
              tooltipTitle="LinkedIn"
            />
            <SpeedDialAction
              icon={<BsFacebook />}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=http%3A%2F%2Fwww.WOWebDev.com%2F&ref=plugin&src=share_button",
                  "facebook",
                  "left=20,top=20,width=500,height=500,toolbar=1,resizable=0"
                );
                return false;
              }}
              tooltipTitle="Facebook"
            />

            {/* ))} */}
          </SpeedDial>
        </span>
      </header>

      {/* <div
        className="card"
        id="contactCard"
      >
      
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
                william.owen.dev
                <wbr />
                @gmail.com
              </li>
              <li>253-514-2990</li>
            </ul>
          </li>
          <li>
            Portfolio
            <ul>
              <li>
                <a>www.WOWebDev.com</a>
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
      </div> */}
      <img
        src={contactCard}
        id="contactCard"
        alt=""
      />
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  a {
    display: block;
  }
  img {
    box-sizing: content-box;
    width: 375px;
    max-width: 100%;
    margin: 0 auto;
    &.linkedin {
      width: 74px;
      background: #2b7ab8;
      /* border */
    }
  }
  header {
    h2 {
      font-size: clamp(10px, 6vw, 21px);
    }
  }
  .share {
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }
  .card {
    position: relative;
    user-select: text;
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
