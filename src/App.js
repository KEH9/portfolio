
import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import './App.css';

import Game from './components/game/Game';
import Resume from './components/resume/Resume';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Resume} />
        <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
