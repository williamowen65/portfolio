import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './styles/footer.css'

const Footer = () => {

  let target = useRef();

  useEffect(() => {
    target.current = document.getElementById("target");
  }, []);

  const scroll = () => {
    if (window.scrollY > target.current.offsetTop) {
      target.current.scrollIntoView({});
    }
  };

  const github = () => {
    window.open("https://github.com/williamowen65", "_blank");
  };
  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/webdevpreneur29/", "_blank");
  };

  return (
    <footer className='footer'>
      {/* <img src='./assets/imgs/GitHub.png' alt='' /> */}
      <div className='bottomFooter'>
        <div>
          <ul>
            <li onClick={scroll}>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <a href='/create#FAQ'>FAQ</a>
            </li>
            <li>
              {/* <Link to='/rate'> Give a review</Link> */}
              <a href='#sdsd' download='ComicRelease'>Comic Release</a>
            </li>
          </ul>
        </div>

        <div className='links'>
          <img
            class='github'
            src='./assets/imgs/GitHub.png'
            alt=''
            onClick={github}
          />
          <img
            class='linkedIn'
            src='./assets/imgs/linkedin.png'
            alt=''
            onClick={linkedIn}
          />
        </div>

        <div>
          <ul>
            <li>
              <a
                href='https://calendar.google.com/calendar/u/0/embed?src=fcmj4f2tucb7j8683cj8dtp4do@group.calendar.google.com&ctz=America/Los_Angeles'
                target='_blank'
                rel='noreferrer'
              >
                Calendar
              </a>
            </li>
            <li onClick={() => scroll()}>
              <Link to='/credits'>Credits</Link>
            </li>
            <li>Themes</li>
          </ul>
        </div>
      </div>
      <div>
        <h1>OG</h1>
        <p>Outside Games</p>
        <p>😀</p>

      </div>
    </footer>
  );
};

export default Footer;
