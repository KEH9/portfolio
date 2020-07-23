// todo master

import React from 'react';
import {
<<<<<<< HEAD
  HashRouter, Route, Switch,
=======
  BrowserRouter, Route, Switch, Redirect,
>>>>>>> parent of f1cacc2c... s c
} from 'react-router-dom';

import './App.css';

import Game from './components/game/Game';
import Resume from './components/resume/Resume';


function App() {
  return (

    <HashRouter>
      <Switch>
        <Route exact path="/" component={Resume} />
        <Route path="/portfolio" component={Resume} />
        <Route path="/game" component={Game} />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>

  );
}

export default App;
