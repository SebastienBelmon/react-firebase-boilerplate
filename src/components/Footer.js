// import react,
import React, { Component } from 'react';

import '../styles/styles.css';

// create and export component
export default class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    );
  }
};