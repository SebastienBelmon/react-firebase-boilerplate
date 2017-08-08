// import react,
import React, { Component } from 'react';

// create and export component
export default class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <a className="navbar-brand" href="/">Firebase Boilerplate</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Auth</a>
          </li>
          <p className="navbar-text navbar-right">Signed in as:</p>
        </ul>
      </nav>
    );
  }
};