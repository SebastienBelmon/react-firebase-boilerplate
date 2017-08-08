// import react,
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

// create and export component
export default class  extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </main>
    );
  }
};