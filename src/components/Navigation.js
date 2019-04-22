import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <NavLink className="nav" to="/">resume</NavLink>
    <NavLink className="nav" to="/game">game</NavLink>
  </div>
);

export default Navigation;
