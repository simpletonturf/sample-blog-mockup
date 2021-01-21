import React from 'react';
import './Home.scss';
import { Component } from 'react';
import lt from '../assets/tpl.png';
import rt from '../assets/btr.png';
import blgpic from '../assets/blgpic.png';
import malerblock from '../fonts/Malerblock-Medium.ttf';
import Navbar from '../Navbar/navbar';

export default class home extends Component {
  render() {
    return (
      <React.Fragment>
        {/*-----------------> This is the navbar area <--------------------------*/}
        <Navbar current={"home"} />
        {/*-----------------> End of Navbar ares <-------------------------------*/}
        <div className='land'>
          <div className='top-left'>
            <img id='lt' src={lt}></img>
          </div>
          <div className='head'>
            <center>
              <p style={{ fontFamily: { malerblock } }}>
                Description of our shiz
              </p>
            </center>
          </div>
          <center>
            <div className='head_button'>
              <p>read our blogs</p>
            </div>
            <img id='br' src={rt}></img>
          </center>
        </div>
        <div className='break'>
          <br />
        </div>
        {/*-----------------> This is the newsletter area <--------------------------*/}
        <center>
          <div className='newsletter'>
            <div>
              <p>Join Our Newsletter</p>
            </div>
            <div className='email'>
              <input
                tpye='text'
                placeholder='Email'
                style={{ fontFamily: { malerblock } }}></input>
              <button>SUBMIT</button>
            </div>
          </div>
        </center>

        {/*-----------------> This is the end of newsletter area <--------------------------*/}
        <div className='break'>
          <br />
        </div>
        {/*-----------------> This is the blog area <--------------------------*/}
        <div className='blog'>
          <div className='card'>
            <div className='blogpic'>
              <center>
                <img src={blgpic} />
              </center>
            </div>
            <div className='blgcontent'>
              <p className='blgtitle' style={{ fontFamily: { malerblock } }}>
                Blog Blog Title
              </p>

              <br />
              <br />
              <p className='blgintro' style={{ fontFamily: { malerblock } }}>
                Intro.... something about the blog.................
                ........................................................................................
              </p>

              <button id='blgbutton' style={{ fontFamily: { malerblock } }}>
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className='blog'>
          <div className='card'>
            <div className='blogpic'>
              <center>
                <img src={blgpic} />
              </center>
            </div>
            <div className='blgcontent'>
              <p className='blgtitle' style={{ fontFamily: { malerblock } }}>
                Blog Blog Title
              </p>

              <br />
              <br />
              <p className='blgintro' style={{ fontFamily: { malerblock } }}>
                Intro.... something about the blog.................
                ........................................................................................
              </p>

              <button id='blgbutton' style={{ fontFamily: { malerblock } }}>
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className='blog'>
          <div className='card'>
            <div className='blogpic'>
              <center>
                <img src={blgpic} />
              </center>
            </div>
            <div className='blgcontent'>
              <p className='blgtitle' style={{ fontFamily: { malerblock } }}>
                Blog Blog Title
              </p>

              <br />
              <br />
              <p className='blgintro' style={{ fontFamily: { malerblock } }}>
                Intro.... something about the blog.................
                ........................................................................................
              </p>

              <button id='blgbutton' style={{ fontFamily: { malerblock } }}>
                Read More
              </button>
            </div>
          </div>
        </div>

        {/*-----------------> This is the end of blog area <--------------------------*/}

        {/*-----------------> This is the ads area <--------------------------*/}
        <div className='ads'>
          <br />
          <center>
            <p>ADS</p>
          </center>
        </div>
        <div className='footer'>
          <div className='heads'>
            <p>Privacy Policy</p>
            <p>Social Buttons</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
