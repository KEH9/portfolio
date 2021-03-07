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
          Including ES2020, regular explanations, ShadowDOM, AJAX, design patterns etc.
          Feel confident with it. Can format code following Google JavaScript
          style guide or Air BnB rules. My JavaScript projects:&nbsp;<a href="https://keh9.github.io/kumbhaka">kumbhaka</a>
        </div>
      </div>

      <div className="paragraph">
        <h3>
          React & Redux
        </h3>
        <div>
          <p>
            I gain some expirience with this libraries creating&nbsp;
            <NavLink to="/game">the cozy snake game</NavLink>&nbsp;and this website.
            You can <NavLink to="/game">play</NavLink> this game or view source code of it on my &nbsp;
            <a href="https://github.com/KEH9/portfolio">GitHub</a>.
          </p>
          <p>
            Additional libraries: Router v.4, react-device-detect and many other.
          </p>
        </div>
      </div>

      <div className="paragraph">
        <h3>
          TypeScript
        </h3>
        <div>
          I got the education through official tutotial and get a little practise in it.
        </div>
      </div>


      <div className="paragraph">
        <h3>
          jQuery
        </h3>
        <div>I obtained the lite experience with it. It seems for me a little bit
          redundant, however I can work with it if it is necessary.
        </div>
      </div>

      <div className="paragraph">
        <h3>
          Node.js
        </h3>
        <div>
          I gain the very base knowledge of it, can build easy servers,
          feel myself interested to increase this skill.
        </div>
      </div>


      <div className="paragraph">
        <h3>
          mySQL
        </h3>
        <div>
          I got education on official website and created this small study project.
          You can see it&apos;s sourse code my&nbsp;
          <a href="https://github.com/KEH9/Node_mySQL_Project">
            GitHub
          </a>.
        </div>
      </div>


      <div className="paragraph">
        <h3>
          MongoDB
        </h3>
        <div>
        I get only a little expirience with it in combination with mongoose library on Node.js server.
        </div>
      </div>


      <h2>Auxiliary technologies</h2>

      <div className="paragraph">
        <h3 className="last">
        Npm, ESLint, JSDoc, GIT (GitHub), Zeplin
        </h3>
        <div className="last">I used this technologies time after time while studying.</div>
      </div>


    </div>

  );
}
