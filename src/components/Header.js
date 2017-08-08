// import react,
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// create and export component
export default class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <Link className="navbar-brand" to="/">Firebase Boilerplate</Link>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">Auth</Link>
          </li>
          <p className="navbar-text navbar-right">Signed in as:</p>
        </ul>
      </nav>
    );
  }
};