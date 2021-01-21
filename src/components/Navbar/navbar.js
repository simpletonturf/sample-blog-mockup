import React from 'react';
import './navbar.scss';
import { Component } from 'react';
import malerblock from '../fonts/Malerblock-Medium.ttf';

export default class navbar extends Component {
  constructor(props){
    super(props);
  }
  navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link');
    const navLinks = document.querySelectorAll('.link li');
    nav.classList.toggle('link-active');
    burger.classList.toggle('toggle');

    navLinks.forEach((li, index) => {
      if (li.animation) {
        li.classList.toggle = '';
      } else {
        li.classList.toggle = `navLinkFade 0.5s ease forward ${index / 7 + 1}s`;
      }
    });
  };

  render() {
    console.log(this.props.current);
    return (
      <React.Fragment>
        {/*-----------------> This is the navbar area <--------------------------*/}
        <div className='nav'>
          <div className='burger' onClick={this.navSlide}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
          <div className='logo'>
            <p style={{ fontFamily: { malerblock } }}>R-NOM</p>
          </div>
          <ul className='link'>
            <li>
              <a
                href='/'
                style={{
                  fontFamily: { malerblock },
                }}>
                  {this.props.current === "home" ? (
                    <b>
                    Home
                  </b>
                  ) : (
                    "Home"
                  )}
                
              </a>
            </li>
            <li>
              <a href='#' style={{ fontFamily: { malerblock } }}>
                Blog
              </a>
            </li>
            <li>
              <a href='#' style={{ fontFamily: { malerblock } }}>
                About
              </a>
            </li>
            <li>
              <a href='/contactus' style={{ fontFamily: { malerblock } }}>
              {this.props.current === "contact" ? (
                    <b>
                    Contact
                  </b>
                  ) : (
                    "Contact"
                  )}
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
