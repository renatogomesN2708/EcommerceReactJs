import React, { Component } from 'react';
import './index.scss';
import logo from "../../assets/LogoDnc.png"

export default class Login extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <img src={logo} alt="" />
        </header>
        <h1 className='login'>Login</h1>
      </div>
    )
  }
}
