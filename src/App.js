// todo master

import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Game from './components/game/Game';
import Resume from './components/resume/Resume';
import Navigation from './components/Navigation';

function App() {
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

const mapStateToProps = (state) => {
  console.log('!');
  return {
    rabbitsToWin: state.rabbitsToWin,
  };
};

export default connect(
  mapStateToProps,
)(App);
