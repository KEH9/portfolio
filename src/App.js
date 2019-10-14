// todo master

import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import './App.css';

import Game from './components/game/Game';
import Resume from './components/resume/Resume';
import Pdf from './components/pdf/Pdf';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Resume} />
        <Route path="/game" component={Game} />
        <Route path="/pdf" component={Pdf} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
