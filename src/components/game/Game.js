import React, { Component } from 'react';
import './Game.css';

import StartMenu from './StartMenu';
import randomInt from './randomInt';
import head from './img/snake-head-bottom.png';
import body from './img/snake-body-up-down.png';
import bodyCurve from './img/snake-turn-left-bottom.png';
import tail from './img/snake-tail-up.png';
import tailUSD from './img/snake-tail-down.png';
import rabbit from './img/rabbit.png';
import bang from './img/bang.gif';
import nom from './sound/nom.mp3';
import aaarrrrr from './sound/aaarrrrr.mp3';
import yuhuu from './sound/yuhuu.mp3';
import soundOn from './img/sound-on.jpg';
import soundOff from './img/sound-off.jpg';


/*
* Main class includes game board and everything on it
*/

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderArray: [],
      rabbit: '',
      bang: '',
      message: '',
      speedRPS: 0,
      rabbitsToWin: 100,
    };
  }


  componentDidMount() {
    this.difficultyLevel = 'veteran';
    this.welcome();
    this.soundInit();
    this.gameIn = false;
    this.timerId = '';
    this.keyDownFunction = (e) => { this.keyPressHandler(e); };
    window.addEventListener('keydown', this.keyDownFunction, false);
  }


  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownFunction, false);
    clearInterval(this.ticId);
    clearTimeout(this.timerId);
  }


  restartGame() {
    this.setState({
      renderArray: [],
      rabbit: '',
      bang: '',
      message: '',
    });

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
        x: 125,
        y: 0,
        direction: 'left',
        pic: head,
      },
      {
        piece: 'body',
        x: 100,
        y: 0,
        direction: 'left',
        pic: body,
      },
      {
        piece: 'body',
        x: 75,
        y: 0,
        direction: 'left',
        pic: body,
      },
      {
        piece: 'body',
        x: 50,
        y: 0,
        direction: 'left',
        pic: body,
      },
      {
        piece: 'tail',
        x: 25,
        y: 0,
        direction: 'left',
        pic: tail,
      },
    ];


    if (this.difficultyLevel === 'newbie') {
      this.currentSpeed = 200;
      this.speedLimit = 150;
      this.speedStep = 2;
      this.winCondition = 65;
    } else if (this.difficultyLevel === 'veteran') {
      this.currentSpeed = 170;
      this.speedLimit = 130;
      this.speedStep = 1;
      this.winCondition = 100;
    } else if (this.difficultyLevel === 'ace') {
      this.currentSpeed = 150;
      this.speedLimit = 120;
      this.speedStep = 1;
      this.winCondition = 120;
    }

    this.setState({
      rabbitsToWin: this.winCondition,
    });

    this.ticCounter = 0;
    this.currentMoveConnecton = 'left'; // direction of the snake head (direction where head attach to other piece)
    this.nextMoveConnection = 'left'; // same in the nex move
    this.lastHeadConnection = 'left'; // same in the tic before
    this.snake = React.createRef();
    this.rabbitX = '';
    this.rabbitY = '';
    this.rabbitsEaten = 0;
    this.rabbitJustEaten = false;
    this.keyPressedThisTic = false;
    this.keyBuffered = '';
    this.chooseLevel = '';
    this.gamePaused = false;
    this.gameIn = true;
    this.ticId = '';


    this.ticGenerator();
    this.createRenderSnakeArray();
    this.addRabbit();

    document.getElementsByClassName('board')[0].classList.add('playing');
  }


  /*
* Generates the rhythm of the game
*/
  ticGenerator() {
    this.ticId = setInterval(() => { this.ticHandler(); }, this.currentSpeed);
    this.setState({
      speedRPS: ((Math.round(1000 / this.currentSpeed * 100)) / 100).toFixed(2),
    });
  }


  stopTic() {
    clearInterval(this.ticId);
  }


  ticHandler() {
    this.ticCounter = this.ticCounter + 1;
    this.currentMoveConnecton = this.nextMoveConnection;

    /*     if (this.snakeLogicArray[0] === undefined) { // cleanup
      this.stopTic();
      return;
    }
    */
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


  increaseDifficultyLevel() {
    if (this.difficultyLevel === 'veteran') {
      this.difficultyLevel = 'ace';
      this.setState({
        rabbitsToWin: 120,
      });
    } else if (this.difficultyLevel === 'newbie') {
      this.difficultyLevel = 'veteran';
      this.setState({
        rabbitsToWin: 100,
      });
    }
    this.chooseLevel = (
      <StartMenu
        difficultyLevel={this.difficultyLevel}
        decreaseDifficultyLevel={this.decreaseDifficultyLevel.bind(this)}
        increaseDifficultyLevel={this.increaseDifficultyLevel.bind(this)}
        restartGame={this.restartGame.bind(this)}
      />
    );

    this.forceUpdate();
  }


  decreaseDifficultyLevel() {
    if (this.difficultyLevel === 'veteran') {
      this.difficultyLevel = 'newbie';
      this.setState({
        rabbitsToWin: 65,
      });
    } else if (this.difficultyLevel === 'ace') {
      this.difficultyLevel = 'veteran';
      this.setState({
        rabbitsToWin: 100,
      });
    }


    this.chooseLevel = (
      <StartMenu
        difficultyLevel={this.difficultyLevel}
        decreaseDifficultyLevel={this.decreaseDifficultyLevel.bind(this)}
        increaseDifficultyLevel={this.increaseDifficultyLevel.bind(this)}
        restartGame={this.restartGame.bind(this)}
      />
    );
    this.forceUpdate();
  }


  keyPressHandler(e) {
    const key = (e.keyCode ? e.keyCode : e.which);

    if ((key === 13 || key === 32) && this.gameIn) {
      e.preventDefault();
      this.pauseGame();
    } else if ((key === 13 || key === 32) && !this.gameIn) {
      this.restartGame();
    }

    if ((key === 37) && !this.gameIn) {
      this.decreaseDifficultyLevel();
    }
    if ((key === 39) && !this.gameIn) {
      this.increaseDifficultyLevel();
    }

    if ((
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

    if (key === 77) {
      this.soundToggle();
    }
  }


  /*
* Changes direction of the snake movement
*/
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


  increaseSpeed() {
    if (this.currentSpeed <= this.speedLimit) return;
    this.currentSpeed = this.currentSpeed - this.speedStep;
    clearInterval(this.ticId);
    this.ticGenerator();

    this.setState({
      speedRPS: ((Math.round(1000 / this.currentSpeed * 100)) / 100).toFixed(2),
    });
  }


  rabbitEaten() {
    this.rabbitsEaten = this.rabbitsEaten + 1;
    this.setState({
      rabbitsToWin: (this.winCondition - this.rabbitsEaten),
    });

    if (this.rabbitsEaten === this.winCondition) {
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

    this.setState({
      bang: <img
        src={bang}
        alt=""
        className="bang"
        style={style}
      />,
    });

    this.timeoutId = setTimeout(() => { this.gameOver(); }, 2000);
  }


  collision(x, y) {
    this.stopTic();
    if (this.soundIsOn) new Audio(aaarrrrr).play();

    const style = { left: `${x - 88}px`, top: `${y - 88}px` };

    this.setState({
      bang: <img
        src={bang}
        alt=""
        className="bang"
        style={style}
      />,
    });

    this.timeoutId = setTimeout(() => { this.gameOver(); }, 2000);
  }


  welcome() {
    this.setState({
      message: <div className="message long">WELCOME TO<br />COZY SNAKE GAME!</div>,
    });

    this.chooseLevel = (
      <StartMenu
        difficultyLevel={this.difficultyLevel}
        decreaseDifficultyLevel={this.decreaseDifficultyLevel.bind(this)}
        increaseDifficultyLevel={this.increaseDifficultyLevel.bind(this)}
        restartGame={this.restartGame.bind(this)}
      />
    );
  }


  pauseGame() {
    if (!this.gamePaused) {
      this.gamePaused = !this.gamePaused;
      this.stopTic();
      this.setState({
        message: <div className="message">GAME PAUSED</div>,
      });
    } else {
      this.gamePaused = !this.gamePaused;
      this.setState({
        message: '',
      });
      this.ticGenerator();
    }
  }


  gameOver() {
    this.gameIn = false;
    this.removeGame();
    this.setState({
      message: <div className="message">GAME OVER</div>,
    });

    this.chooseLevel = (
      <StartMenu
        difficultyLevel={this.difficultyLevel}
        decreaseDifficultyLevel={this.decreaseDifficultyLevel.bind(this)}
        increaseDifficultyLevel={this.increaseDifficultyLevel.bind(this)}
        restartGame={this.restartGame.bind(this)}
      />
    );
    this.forceUpdate();
  }


  congratulations() {
    this.gameIn = false;
    this.removeGame();
    if (this.soundIsOn) new Audio(yuhuu).play();

    this.setState({
      message: <div className="message long">CONGRATULATIONS! you win!</div>,
    });

    this.chooseLevel = (
      <StartMenu
        difficultyLevel={this.difficultyLevel}
        decreaseDifficultyLevel={this.decreaseDifficultyLevel.bind(this)}
        increaseDifficultyLevel={this.increaseDifficultyLevel.bind(this)}
        restartGame={this.restartGame.bind(this)}
      />
    );
    this.forceUpdate();
  }


  removeGame() {
    this.stopTic();
    this.setState({
      renderArray: [],
      rabbit: '',
      bang: '',
    });

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
      if (x >= (28 * 25) || y >= (20 * 25) || x <= -1 || y <= -1) {
        return true;
      }
      return false;
    }
    return false;
  }


  addHeadToLogicArray() {
    this.lastHeadConnection = this.nextMoveConnection;

    switch (this.nextMoveConnection) {
      case 'left':
        this.snakeLogicArray[0].x = this.snakeLogicArray[0].x + 25;
        this.snakeLogicArray[0].direction = 'left';
        break;

      case 'right':
        this.snakeLogicArray[0].x = this.snakeLogicArray[0].x - 25;
        this.snakeLogicArray[0].direction = 'right';
        break;

      case 'up':
        this.snakeLogicArray[0].y = this.snakeLogicArray[0].y + 25;
        this.snakeLogicArray[0].direction = 'up';
        break;

      case 'down':
        this.snakeLogicArray[0].y = this.snakeLogicArray[0].y - 25;
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


  addNewBodyPieceToLogicArray() {
    const newBodyPiece = {};
    newBodyPiece.x = this.snakeLogicArray[0].x; // X coord
    newBodyPiece.y = this.snakeLogicArray[0].y; // Y coord

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


  removeLastBodyPieceFromLogicArray() {
    if (this.rabbitJustEaten) return;
    this.snakeLogicArray.splice((this.snakeLogicArray.length - 1), 1);
  }


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


  addRabbit() {
    let x; let y; let
      checkResult;

    do {
      x = randomInt(0, 27) * 25;
      y = randomInt(0, 19) * 25;
      checkResult = this.checkSnakeCoordinates(x, y, 'wholeSnake');
    } while (!checkResult);

    this.rabbitX = x;
    this.rabbitY = y;

    const style = { left: `${x}px`, top: `${y}px` };

    this.setState({
      rabbit: <img
        src={rabbit}
        alt=""
        className="rabbit"
        style={style}

      />,
    });
  }


  /*
* Makes render array from logic array
*/
  createRenderSnakeArray() {
    const renderArray = [];

    for (let i = 0; i < this.snakeLogicArray.length; i++) {
      const style = { left: (`${this.snakeLogicArray[i].x}px`), top: (`${this.snakeLogicArray[i].y}px`) };
      renderArray.push(
        <img
          key={`${this.snakeLogicArray[i].x} ${this.snakeLogicArray[i].y}`}
          src={this.snakeLogicArray[i].pic}
          alt=""
          className={`${this.snakeLogicArray[i].piece} ${this.snakeLogicArray[i].direction}`}
          ref={this.snake}
          style={style}
        />,
      );
    }
    this.setState({
      renderArray,
    });
  }


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

        <div
          className="leftColumn"
        >
          <div className="board">
            {this.state.renderArray}
            {this.state.rabbit}
            {this.state.bang}
            {this.state.message}
            {this.chooseLevel}
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
            <span className="info"> {this.difficultyLevel} </span>
          </div>

          <div className="speedRPS">
            Your current speed is
            <span className="info"> {this.state.speedRPS} </span>
              rabbits per second
          </div>

          <div className="rabbitsToWin">
            You have to eat
            <span className="info"> {this.state.rabbitsToWin} </span>
            more rabbits to win
          </div>

          <div className="technologyStack">
            Technology stack for this game: React.js, javascript (ES6), css, html
          </div>
          <div className="github">
            You can get the source code of this game at my
            <span className="info"> <a href="https://github.com/KEH9">github</a></span>
            account
          </div>

          <div className="offerAJob">
            If you want to
            <br />
            <span className="info">offer me a job</span>
            <br />
            you can download my
            <span className="info"> <a href="innokentiy-kuznetsov.doc">resume </a></span>
            , call me
            <span className="info">+79089164787</span>
            . WhatsApp, Viber, Telegram and Skype are also available at this number.
            Also you can mail to
            <a href="mailto:innokkuz@protonmail.com">innokkuz@protonmail.com</a>
          </div>

        </div>

        {/* rightColumn */}


      </div>
    );
  }
}
