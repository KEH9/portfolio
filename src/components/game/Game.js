/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { newbie, veteran, ace } from '../../constants/difficultyLevels';
import {
  setRabbitsToWin,
  increaseDifficultyLevel,
  decreaseDifficultyLevel,
  setCurrentSpeed,
  setSpeedLimit,
  setSpeedStep,
  setWinCondition,
  setRenderArray,
  setRabbit,
  setBang,
  setMessage,
  setSpeedRPS,
  setChooseLevel,
  setFireworks,
  setScale,
} from '../../actions/actionCeator';

import './Game.css';

import StartMenu from './StartMenu';
import randomInt from './randomInt';

import head from './img/snake-head-bottom.png';
import body from './img/snake-body-up-down.png';
import bodyCurve from './img/snake-turn-left-bottom.png';
import tail from './img/snake-tail-up.png';
import tailUSD from './img/snake-tail-down.png';
import rabbitIMG from './img/rabbit.png';
import bangIMG from './img/bang.gif';
import fireworksIMG from './img/fireworks.gif';
import soundOn from './img/sound-on.jpg';
import soundOff from './img/sound-off.jpg';

import nom from './sound/nom.mp3';
import aaarrrrr from './sound/aaarrrrr.mp3';
import yuhuu from './sound/yuhuu.mp3';


/*
* Main class includes game board and everything on it
*/

class Game extends Component {
  componentDidMount() {
    document.title = 'Cozy snake';

    this.startMenu = (
      <StartMenu
        increaseDifficultyLevel={this.increaseDifficultyLevel.bind(this)}
        decreaseDifficultyLevel={this.decreaseDifficultyLevel.bind(this)}
        restartGame={this.restartGame.bind(this)}
      />
    );
    this.gameIn = false;
    this.timerId = '';

    // setting scale of the game board (in pixels)
    const docWidth = document.getElementsByTagName('body')[0].clientWidth;
    const docHeight = document.getElementsByTagName('body')[0].clientHeight;
    this.docWidth = docWidth;
    this.docHeight = docHeight;

    if (docWidth <= 770) {
      this.scale = 15;
    } else if (docWidth <= 1024) {
      this.scale = 20;
    } else if (docWidth <= 1400) {
      this.scale = 25;
    } else if (docWidth <= 1600) {
      this.scale = 30;
    } else if (docWidth <= 2500) {
      this.scale = 35;
    } else {
      this.scale = 45;
    }
    this.props.setScale(this.scale);

    this.boardElement = document.getElementsByClassName('board')[0];
    this.boardElement.style.height = `${20 * this.scale}px`;
    this.boardElement.style.width = `${28 * this.scale}px`;
    this.boardElement.style.borderWidth = `${this.scale}px`;

    this.setDefaultProps();
    this.welcome();
    this.soundInit();
    this.keyDownFunction = (e) => { this.keyPressHandler(e); };
    window.addEventListener('keydown', this.keyDownFunction, false);

    // show "mobile" if mobie device
    if (isMobile) {
      document.getElementsByClassName('soon')[0].classList.remove('none');
      document.getElementsByClassName('leftColumn')[0].classList.add('none');
      document.getElementsByClassName('rightColumn')[0].classList.add('none');
    } else {
      document.getElementsByClassName('soon')[0].classList.add('none');
      document.getElementsByClassName('leftColumn')[0].classList.remove('none');
      document.getElementsByClassName('rightColumn')[0].classList.remove('none');
    }
  }


  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownFunction, false);
    clearInterval(this.ticId);
    clearTimeout(this.timerId);
  }

  // needs for component mount after dismounting only to renew state!
  setDefaultProps() {
    if (this.props.difficultyLevel === newbie) {
      this.props.setRabbitsToWin(65);
      this.props.setCurrentSpeed(200);
    } else if (this.props.difficultyLevel === veteran) {
      this.props.setRabbitsToWin(100);
      this.props.setCurrentSpeed(170);
    } else if (this.props.difficultyLevel === ace) {
      this.props.setRabbitsToWin(120);
      this.props.setCurrentSpeed(150);
    }
    this.props.setRenderArray([]);
    this.props.setRabbit('');
    this.props.setBang('');
    this.props.setMessage('');
    this.props.setSpeedRPS(0);
    this.props.setFireworks('');
  }


  restartGame() {
    this.props.setRenderArray([]);
    this.props.setRabbit('');
    this.props.setBang('');
    this.props.setMessage('');
    this.props.setFireworks('');


    /*
    * snakeLogicArray contains information about pieces of snake, each piece information includes:
    * piece type
    * X coord
    * Y coord
    * direction of the piece (place where piece attach to other piece, its mean direction to
    * next piece. This decision is not obvious, but I decided it is better)
    * img file
    */
    this.snakeLogicArray = [
      {
        piece: 'head',
        x: (5 * this.scale),
        y: 0,
        direction: 'left',
        pic: head,
      },
      {
        piece: 'body',
        x: (4 * this.scale),
        y: 0,
        direction: 'left',
        pic: body,
      },
      {
        piece: 'body',
        x: (3 * this.scale),
        y: 0,
        direction: 'left',
        pic: body,
      },
      {
        piece: 'body',
        x: (2 * this.scale),
        y: 0,
        direction: 'left',
        pic: body,
      },
      {
        piece: 'tail',
        x: (1 * this.scale),
        y: 0,
        direction: 'left',
        pic: tail,
      },
    ];


    this.props.setRabbitsToWin(this.props.winCondition);

    this.ticCounter = 0;
    this.currentMoveConnecton = 'left'; // direction of the snake head (direction where head attach to other piece)
    this.nextMoveConnection = 'left'; // same in the next move
    this.lastHeadConnection = 'left'; // same in the tic before
    this.rabbitX = '';
    this.rabbitY = '';
    this.rabbitsEaten = 0;
    this.rabbitJustEaten = false;
    this.keyPressedThisTic = false;
    this.keyBuffered = '';
    this.props.setChooseLevel('');
    this.gamePaused = false;
    this.gameIn = true;
    this.ticId = '';

    this.ticGenerator();
    this.createRenderSnakeArray();
    this.addRabbit();

    document.getElementsByClassName('board')[0].classList.add('playing');
  }


  // Generates the rhythm of the game
  ticGenerator() {
    this.ticId = setInterval(() => { this.ticHandler(); }, this.props.currentSpeed);
    this.props.setSpeedRPS(((Math.round(1000 / this.props.currentSpeed * 100)) / 100).toFixed(2));
  }


  stopTic() {
    clearInterval(this.ticId);
  }

  // events on every tic of the game
  ticHandler() {
    this.ticCounter = this.ticCounter + 1;
    this.currentMoveConnecton = this.nextMoveConnection;
    this.addNewBodyPieceToLogicArray();
    this.removeLastBodyPieceFromLogicArray();
    this.addTailToLogicArray();
    this.addHeadToLogicArray();

    if (this.keyPressedThisTic === true) {
      this.keyPressedThisTic = false;
      this.changeDirection(this.keyBuffered);
      this.keyBuffered = '';
    }

    this.createRenderSnakeArray();
  }

  // changing game parameters which are dependent on game difficulty level
  increaseDifficultyLevel() {
    if (this.props.difficultyLevel === newbie) {
      this.props.setRabbitsToWin(100);
      this.props.setCurrentSpeed(170);
      this.props.setSpeedLimit(130);
      this.props.setSpeedStep(1);
      this.props.setWinCondition(100);
    } else if (this.props.difficultyLevel === veteran) {
      this.props.setRabbitsToWin(140);
      this.props.setCurrentSpeed(150);
      this.props.setSpeedLimit(120);
      this.props.setSpeedStep(1);
      this.props.setWinCondition(140);
    }
    this.props.increaseDifficultyLevel();
  }

  // changing game parameters which are dependent on game difficulty level
  decreaseDifficultyLevel() {
    if (this.props.difficultyLevel === veteran) {
      this.props.setRabbitsToWin(65);
      this.props.setCurrentSpeed(200);
      this.props.setSpeedLimit(150);
      this.props.setSpeedStep(2);
      this.props.setWinCondition(65);
    } else if (this.props.difficultyLevel === ace) {
      this.props.setRabbitsToWin(100);
      this.props.setCurrentSpeed(170);
      this.props.setSpeedLimit(130);
      this.props.setSpeedStep(1);
      this.props.setWinCondition(100);
    }
    this.props.decreaseDifficultyLevel();
  }


  keyPressHandler(e) {
    const key = (e.keyCode ? e.keyCode : e.which);

    if ((key === 13 || key === 32) && this.gameIn) { // enter and space when game already started
      e.preventDefault();
      this.pauseGame();
    } else if ((key === 13 || key === 32) && !this.gameIn) { // enter and space in start menu
      this.restartGame();
    }

    if ((key === 37) && !this.gameIn) { // cursor left in menu
      this.decreaseDifficultyLevel();
    }
    if ((key === 39) && !this.gameIn) { // cursor right in menu
      this.increaseDifficultyLevel();
    }

    if (( // bufferization of the key pressed if one keypress was already done in this tic
      key === 37
      || key === 38
      || key === 39
      || key === 40
      || key === 65
      || key === 68
      || key === 83
      || key === 87
    ) && this.keyPressedThisTic === false && this.gameIn) {
      this.keyPressedThisTic = true;
      this.changeDirection(key);
    } else if ((
      key === 37
      || key === 38
      || key === 39
      || key === 40
      || key === 65
      || key === 68
      || key === 83
      || key === 87
    ) && this.gameIn) {
      this.keyBuffered = key;
    }

    if (key === 77) { // mute / unmute sound
      this.soundToggle();
    }
  }


  // Changes direction of the snake movement
  changeDirection(key) {
    if ((key === 37 || key === 65) && this.currentMoveConnecton !== 'left') { // left arrow
      this.nextMoveConnection = 'right';
    }

    if ((key === 38 || key === 87) && this.currentMoveConnecton !== 'up') { // up arrow
      this.nextMoveConnection = 'down';
    }

    if ((key === 39 || key === 68) && this.currentMoveConnecton !== 'right') { // right arrow
      this.nextMoveConnection = 'left';
    }

    if ((key === 40 || key === 83) && this.currentMoveConnecton !== 'down') { // down arrow
      this.nextMoveConnection = 'up';
    }
  }

  // increasing speed of the snake (tic rithm)
  increaseSpeed() {
    if (this.props.currentSpeed <= this.props.speedLimit) return;
    const newCurrentSpeed = (this.props.currentSpeed - this.props.speedStep);
    this.props.setCurrentSpeed(newCurrentSpeed);
    clearInterval(this.ticId);
    this.ticGenerator();

    this.props.setSpeedRPS(((Math.round(1000 / this.props.currentSpeed * 100)) / 100).toFixed(2));
  }

  // Snake got the rabbit event
  rabbitEaten() {
    this.rabbitsEaten = this.rabbitsEaten + 1;
    this.props.setRabbitsToWin(this.props.winCondition - this.rabbitsEaten);

    if (this.rabbitsEaten === this.props.winCondition) {
      this.congratulations();
      return;
    }

    this.addRabbit();
    if (this.soundIsOn) new Audio(nom).play();
    this.rabbitJustEaten = true;
    this.increaseSpeed();
  }


  snakeGotItself(x, y) {
    this.stopTic();
    if (this.soundIsOn) new Audio(aaarrrrr).play();

    const style = { left: `${x - 100}px`, top: `${y - 100}px` };

    this.props.setBang(
      <img
        src={bangIMG}
        alt=""
        className="bang"
        style={style}
      />,
    );

    this.timeoutId = setTimeout(() => { this.gameOver(); }, 2000);
  }

  // snake hit the border
  collision(x, y) {
    this.stopTic();
    if (this.soundIsOn) new Audio(aaarrrrr).play();

    const style = { left: `${x - 88}px`, top: `${y - 88}px` };

    this.props.setBang(
      <img
        src={bangIMG}
        alt=""
        className="bang"
        style={style}
      />,
    );

    this.timeoutId = setTimeout(() => { this.gameOver(); }, 2000);
  }

  // welcome menu (game just loaded)
  welcome() {
    const style = { fontSize: `${this.scale * 2.5}px` };
    this.props.setMessage(
      <div className="message" style={style}>
        WELCOME TO<br />COZY SNAKE GAME!
      </div>,
    );
    this.props.setChooseLevel(this.startMenu);
  }

  // pausing/unpausing game
  pauseGame() {
    if (!this.gamePaused) {
      this.gamePaused = !this.gamePaused;
      this.stopTic();
      const style = { fontSize: `${this.scale * 5}px` };
      this.props.setMessage(<div className="message" style={style}>GAME PAUSED</div>);
    } else {
      this.gamePaused = !this.gamePaused;
      this.props.setMessage('');
      this.ticGenerator();
    }
  }

  // game over menu
  gameOver() {
    this.gameIn = false;
    this.removeGame();
    const style = { fontSize: `${this.scale * 4}px` };
    this.props.setMessage(<div className="message" style={style}>GAME OVER</div>);
    this.props.setChooseLevel(this.startMenu);
  }

  // win event
  congratulations() {
    this.gameIn = false;
    this.removeGame();
    if (this.soundIsOn) new Audio(yuhuu).play();

    const styleFireworks = { height: `${this.scale * 20}px`, width: `${this.scale * 28}px` };
    this.props.setFireworks(
      <img
        src={fireworksIMG}
        alt=""
        className="fireworks"
        style={styleFireworks}
      />,
    );

    this.timeoutId = setTimeout(() => {
      this.props.setFireworks('');
      const style = { fontSize: `${this.scale * 2.5}px` };
      this.props.setMessage(<div className="message" style={style}>CONGRATULATIONS! you win!</div>);
      this.props.setChooseLevel(this.startMenu);
    }, 2500);
  }

  // stoping tic and setting default condition of the game
  removeGame() {
    this.stopTic();

    this.props.setRenderArray([]);
    this.props.setRabbit('');
    this.props.setBang('');

    this.snakeLogicArray = [];
    this.ticCounter = 0;
    this.nextMoveConnection = 'left';
    this.currentMoveConnecton = 'left';
    this.lastHeadConnection = 'left';
    this.rabbitX = '';
    this.rabbitY = '';
    this.rabbitsEaten = 0;
    this.rabbitJustEaten = false;
    this.ticId = '';
    document.getElementsByClassName('board')[0].classList.remove('playing');
  }


  /*
* headOnly - cheks if head coordinates equal to x,y of rabbit (got him!)
* wholeSnake - cheks if all pieces of the snake coordinates equal to x,y (rabbit placement)
* bodyAndTail - cheks if all pieces of the snake coordinates exept head equal to x,y (got itself!)
* borderCollision - cheks if head coordinates equal bordiers coordinates
*/
  checkSnakeCoordinates(x, y, typeOfCheck) {
    if (typeOfCheck === 'headOnly') {
      if (this.snakeLogicArray[0].x === x && this.snakeLogicArray[0].y === y) {
        return true;
      }
      return false;
    }

    if (typeOfCheck === 'wholeSnake') {
      for (let i = 0; i < this.snakeLogicArray.length; i++) {
        if (this.snakeLogicArray[i].x === x && this.snakeLogicArray[i].y === y) return false;
      }
      return true;
    }

    if (typeOfCheck === 'bodyAndTail') {
      for (let i = 1; i < (this.snakeLogicArray.length); i++) {
        if (this.snakeLogicArray[i].x === x && this.snakeLogicArray[i].y === y) return true;
      }
      return false;
    }

    if (typeOfCheck === 'borderCollision') {
      if (x >= (28 * this.scale) || y >= (20 * this.scale) || x <= -1 || y <= -1) {
        return true;
      }
      return false;
    }
    return false;
  }

  // adding new head to logic array
  addHeadToLogicArray() {
    this.lastHeadConnection = this.nextMoveConnection;

    switch (this.nextMoveConnection) {
      case 'left':
        this.snakeLogicArray[0].x = this.snakeLogicArray[0].x + this.scale;
        this.snakeLogicArray[0].direction = 'left';
        break;

      case 'right':
        this.snakeLogicArray[0].x = this.snakeLogicArray[0].x - this.scale;
        this.snakeLogicArray[0].direction = 'right';
        break;

      case 'up':
        this.snakeLogicArray[0].y = this.snakeLogicArray[0].y + this.scale;
        this.snakeLogicArray[0].direction = 'up';
        break;

      case 'down':
        this.snakeLogicArray[0].y = this.snakeLogicArray[0].y - this.scale;
        this.snakeLogicArray[0].direction = 'down';
        break;

      default: break;
    }

    if (this.checkSnakeCoordinates(this.snakeLogicArray[0].x, this.snakeLogicArray[0].y, 'bodyAndTail') === true) {
      this.snakeGotItself(this.snakeLogicArray[0].x, this.snakeLogicArray[0].y);
      return;
    }
    if (this.checkSnakeCoordinates(this.snakeLogicArray[0].x, this.snakeLogicArray[0].y, 'borderCollision') === true) {
      this.collision(this.snakeLogicArray[0].x, this.snakeLogicArray[0].y);
      return;
    }
    if (this.checkSnakeCoordinates(this.rabbitX, this.rabbitY, 'headOnly') === true) {
      this.rabbitEaten();
    }
  }

  // adding new body piece to logic array
  addNewBodyPieceToLogicArray() {
    const newBodyPiece = {};
    newBodyPiece.x = this.snakeLogicArray[0].x;
    newBodyPiece.y = this.snakeLogicArray[0].y;

    if (this.lastHeadConnection === this.nextMoveConnection) {
      newBodyPiece.piece = 'body';
      newBodyPiece.direction = this.snakeLogicArray[0].direction; // direction
      newBodyPiece.pic = body; // img
    } else {
      newBodyPiece.piece = 'bodyCurve';
      let nextConnection;
      switch (this.nextMoveConnection) { // head connection is opposite to body ;)
        case 'left':
          nextConnection = 'right';
          break;
        case 'right':
          nextConnection = 'left';
          break;
        case 'up':
          nextConnection = 'down';
          break;
        case 'down':
          nextConnection = 'up';
          break;
        default: break;
      }
      newBodyPiece.direction = `${this.lastHeadConnection}-${nextConnection}`; // direction
      newBodyPiece.pic = bodyCurve; // img
    }

    this.snakeLogicArray.splice(1, 0, newBodyPiece);
  }

  // removing last body piece from logic array
  removeLastBodyPieceFromLogicArray() {
    if (this.rabbitJustEaten) return;
    this.snakeLogicArray.splice((this.snakeLogicArray.length - 1), 1);
  }

  // adding tail piece to logic array
  addTailToLogicArray() {
    if (this.rabbitJustEaten) {
      this.rabbitJustEaten = false;
      return;
    }

    const lastPiecePosition = (this.snakeLogicArray.length - 1);
    const lastPiece = this.snakeLogicArray[lastPiecePosition];
    lastPiece.piece = 'tail';
    lastPiece.pic = tail;

    const lastPieceDirection = lastPiece.direction;
    let connection;
    const dashPosition = lastPieceDirection.indexOf('-');

    if (dashPosition === -1) {
      connection = lastPiece.direction;
    } else {
      connection = lastPiece.direction.slice(dashPosition + 1);
      lastPiece.pic = tailUSD;
    }

    lastPiece.direction = connection;

    this.snakeLogicArray[lastPiecePosition] = lastPiece;
  }

  // adding new rabbit to game field
  addRabbit() {
    let x; let y; let checkResult;

    do {
      x = randomInt(0, 27) * this.scale;
      y = randomInt(0, 19) * this.scale;
      checkResult = this.checkSnakeCoordinates(x, y, 'wholeSnake');
    } while (!checkResult);

    this.rabbitX = x;
    this.rabbitY = y;

    const style = { left: `${x}px`, top: `${y}px`, height: `${this.scale}px` };

    this.props.setRabbit(
      <img
        src={rabbitIMG}
        alt=""
        className="rabbit"
        style={style}
      />,
    );
  }


  // convert logic array to render array
  createRenderSnakeArray() {
    const newRenderArray = [];

    for (let i = 0; i < this.snakeLogicArray.length; i++) {
      const style = { left: (`${this.snakeLogicArray[i].x}px`), top: (`${this.snakeLogicArray[i].y}px`) };
      newRenderArray.push(
        <img
          key={`${this.snakeLogicArray[i].x} ${this.snakeLogicArray[i].y}`}
          src={this.snakeLogicArray[i].pic}
          alt=""
          className={`${this.snakeLogicArray[i].piece} ${this.snakeLogicArray[i].direction}`}
          style={style}
        />,
      );
    }
    this.props.setRenderArray(newRenderArray);

    // setting up sizes of images for snake
    this.headElement = document.getElementsByClassName('head')[0];
    if (this.headElement) {
      this.headElement.style.height = `${this.scale}px`;
      this.bodyElements = document.getElementsByClassName('body');
      for (let i = 0; i < this.bodyElements.length; i++) {
        this.bodyElements[i].style.height = `${this.scale}px`;
      }
      this.tailElement = document.getElementsByClassName('tail')[0];
      this.tailElement.style.height = `${this.scale}px`;
    }
  }

  // initiating sound icon
  soundInit() {
    this.soundIsOn = true;
    this.sound = (
      <img
        src={soundOn}
        alt=""
        className="sound"
        onClick={this.soundToggle.bind(this)}
      />
    );
  }

  // mute / unmute sound
  soundToggle() {
    if (this.soundIsOn) {
      this.soundIsOn = false;
      this.sound = (
        <img
          src={soundOff}
          alt=""
          className="sound"
          onClick={this.soundToggle.bind(this)}
        />
      );
      this.forceUpdate();
    } else {
      this.soundIsOn = true;
      this.sound = (
        <img
          src={soundOn}
          alt=""
          className="sound"
          onClick={this.soundToggle.bind(this)}
        />
      );

      this.forceUpdate();
    }
  }


  render() {
    return (

      <div
        className="container"
      >

        <div className="soon none">
          Mobile version comming soon...
        </div>

        <div
          className="leftColumn"
        >
          <div className="board">
            {this.props.renderArray}
            {this.props.rabbit}
            {this.props.bang}
            {this.props.message}
            {this.props.chooseLevel}
            {this.props.fireworks}
          </div>

          {/* board */}

          {this.sound}

        </div>

        {/* leftColumn */}


        <div
          className="rightColumn"
        >
          <div className="toPlay">To play the game use cursor keys or aswd keys and space</div>
          <div className="difficultyLevel">
            Your difficulty level is
            <span className="info"> {this.props.difficultyLevel} </span>
          </div>

          <div className="speedRPS">
            Your current speed is
            <span className="info"> {this.props.speedRPS} </span>
              rabbits per second
          </div>

          <div className="rabbitsToWin">
            You have to eat
            <span className="info"> {this.props.rabbitsToWin} </span>
            more rabbits to win
          </div>

          <div className="technologyStack">
            Technology stack for this game: React.js, Redux, javascript (ES6), css, html
          </div>
          <div className="github">
            You can get the source code of this game at my
            <span className="info"> <a href="https://github.com/KEH9">github</a></span>
            &nbsp;account
          </div>

          <div className="offerAJob">
            If you want to
            <br />
            <span className="info">offer me a job</span>
            <br />
            visit my&nbsp;
            <span className="info"><NavLink to="/resume">website</NavLink></span>


          </div>

        </div>

        {/* rightColumn */}


      </div>
    );
  }
}


const mapStateToProps = state => ({
  difficultyLevel: state.difficultyLevel,
  rabbitsToWin: state.rabbitsToWin,
  currentSpeed: state.currentSpeed,
  speedLimit: state.speedLimit,
  speedStep: state.speedStep,
  winCondition: state.winCondition,
  renderArray: state.renderArray,
  rabbit: state.rabbit,
  bang: state.bang,
  message: state.message,
  speedRPS: state.speedRPS,
  chooseLevel: state.chooseLevel,
  fireworks: state.fireworks,
  scale: state.scale,
});

const mapDispatchToProps = dispatch => ({
  increaseDifficultyLevel: () => { dispatch(increaseDifficultyLevel()); },
  decreaseDifficultyLevel: () => { dispatch(decreaseDifficultyLevel()); },
  setRabbitsToWin: (rabbitsToWin) => { dispatch(setRabbitsToWin(rabbitsToWin)); },
  setCurrentSpeed: (currentSpeed) => { dispatch(setCurrentSpeed(currentSpeed)); },
  setSpeedLimit: (speedLimit) => { dispatch(setSpeedLimit(speedLimit)); },
  setSpeedStep: (speedStep) => { dispatch(setSpeedStep(speedStep)); },
  setWinCondition: (winCondition) => { dispatch(setWinCondition(winCondition)); },
  setRenderArray: (renderArray) => { dispatch(setRenderArray(renderArray)); },
  setRabbit: (rabbit) => { dispatch(setRabbit(rabbit)); },
  setBang: (bang) => { dispatch(setBang(bang)); },
  setMessage: (message) => { dispatch(setMessage(message)); },
  setSpeedRPS: (speedRPS) => { dispatch(setSpeedRPS(speedRPS)); },
  setChooseLevel: (chooseLevel) => { dispatch(setChooseLevel(chooseLevel)); },
  setFireworks: (fireworks) => { dispatch(setFireworks(fireworks)); },
  setScale: (scale) => { dispatch(setScale(scale)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
