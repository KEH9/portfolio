// todo master changed

import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import './App.css';

import Game from './components/game/Game';
import Resume from './components/resume/Resume';
import Navigation from './components/Navigation';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Resume} />
          <Route path="/game" component={Game} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>

    );
  }
}
