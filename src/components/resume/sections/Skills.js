/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>

      <div className="paragraph">
        <h3>HTML5, CSS3, JavaScript</h3>
        <div>
          Including ES6, regular explanations, ShadowDOM, AJAX, COMET, etc.
          Feel confident with it. Can format code following Google JavaScript
          style guide or Air BnB rules.
        </div>
      </div>

      <div className="paragraph">
        <h3>
          React & Redux
        </h3>
        <div>
          <p>
            I gain some expirience with this libraries creating <NavLink to="/game">the cozy snake game</NavLink> and this website.
            You can play this game and view source code of it on my &nbsp;
            <a href="https://github.com/KEH9/portfolio">GitHub</a>.
          </p>
          <p>
            Additional libraries: Router v.4, bindActionCreators.
          </p>
        </div>
      </div>

      <div className="paragraph">
        <h3>
          TypeScript
        </h3>
        <div>
          I got the education through official tutotial, however did not had practised it.
        </div>
      </div>


      <div className="paragraph">
        <h3>
          jQuery
        </h3>
        <div>I obtain lite experience with it. It seems for me a little bit
          outdated in front of React, however I can work with it if it is necessary.
        </div>
      </div>

      <div className="paragraph">
        <h3>
          Node.js
        </h3>
        <div>
          I gain the very base knowledge of it, can build easy server,
          interested to increase this skill.
        </div>
      </div>


      <div className="paragraph">
        <h3>
          MongoDB
        </h3>
        <div>
          I used it with mongoose library on Node.js server.
        </div>
      </div>


      <h2>Auxiliary technologies</h2>

      <div className="paragraph">
        <h3 className="last">
        Npm, ESLint, JSDoc, GIT (GitHub), Zeplin
        </h3>
        <div className="last">I used this technologies frequently while studying.</div>
      </div>


    </div>

  );
}
