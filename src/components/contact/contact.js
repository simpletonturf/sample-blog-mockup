import React from 'react';
import './contact.scss';
import { Component } from 'react';
import malerblock from '../fonts/Malerblock-Medium.ttf';
import urbanist from '../fonts/Urbanist-Light.ttf';
import Navbar from '../Navbar/navbar';

export default class contact extends Component {
  render() {
    return (
      <React.Fragment>
        {/*-----------------> This is the navbar area <--------------------------*/}
        <Navbar current={"contact"}/>
        {/*-----------------> This is the end of navbar area <--------------------------*/}
        <center>
          <div className='contactus'>
            <div className='heading'>
              <center>
                <p style={{ fontFamily: { urbanist } }}>Contact Us</p>
                <div className='underline'>
                  <br />
                </div>
              </center>
            </div>
            <div className='input'>
              <input
                type='input'
                className='ipl'
                placeholder='First Name'
                style={{ fontFamily: { malerblock } }}></input>
              <input
                type='input'
                className='ipl'
                placeholder='Last Name'
                style={{ fontFamily: { malerblock } }}></input>
            </div>
            <div className='input_2'>
              <center>
                <input
                  type='input'
                  className='iip'
                  placeholder='Email Address'
                  style={{ fontFamily: { malerblock } }}></input>
              </center>
            </div>
            <div className='input_2'>
              <center>
                <textarea className='message' placeholder='Message'></textarea>
                <button
                  style={{ fontFamily: { malerblock } }}
                  className='Submit'>
                  SUBMIT
                </button>
              </center>
            </div>
          </div>
        </center>
      </React.Fragment>
    );
  }
}
