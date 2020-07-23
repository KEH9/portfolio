/* eslint-disable linebreak-style */
// TODO
// изменить содержимое ligic array на объекты
// добавить клавиши asdw  и спейс в начале игры


import React, { Component } from 'react';
import './App.css';
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
* Choose difficulty of the game and start game button
*/


/*
* Main class includes game board and everything on it
*/


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderArray: [],
      ticId: '',
      rabbit: '',
      bang: '',
      message: '',
      speedRPS: 0,
      rabbitsToWin: 100,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => { this.keyPressHandler(e); }, false);
    this.difficultyLevel = 'veteran';
    this.welcome();
    this.soundInit();
    this.gameIn = false;
  }


  restartGame() {
    this.setState({
      renderArray: [],
      ticId: '',
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
      ['head', 125, 0, 'left', head],
      ['body', 100, 0, 'left', body],
      ['body', 75, 0, 'left', body],
      ['body', 50, 0, 'left', body],
      ['tail', 25, 0, 'left', tail],
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


    this.ticGenerator();
    this.createRenderSnakeArray();
    this.addRabbit();

    document.getElementsByClassName('board')[0].classList.add('plaing');
  }


  /*
* Generates the rhythm of the game
*/
  ticGenerator() {
    const ticId = setInterval(() => { this.ticHandler(); }, this.currentSpeed);
    this.setState({ ticId });
    this.setState({
      speedRPS: ((Math.round(1000 / this.currentSpeed * 100)) / 100).toFixed(2),
    });
  }


  stopTic() {
    clearInterval(this.state.ticId);
  }


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

    if (key === 27 || key === 13 || key === 32) {
      e.preventDefault();
      this.pauseGame();
    } else if ((
      key === 37
      || key === 38
      || key === 39
      || key === 40)
      && this.keyPressedThisTic === false) {
      this.keyPressedThisTic = true;
      this.changeDirection(key);
    } else if (key === 37 || 38 || 39 || 40) {
      this.keyBuffered = key;
    }
  }


  /*
* Changes direction of the snake movement
*/
  changeDirection(key) {
    switch (key) {
      case 13:
        break;
      case 37: // left arrow
        if (this.currentMoveConnecton === 'left') break;
        this.nextMoveConnection = 'right';
        break;
      case 38: // up arrow
        if (this.currentMoveConnecton === 'up') break;
        this.nextMoveConnection = 'down';
        break;
      case 39: // right  arrow
        if (this.currentMoveConnecton === 'right') break;
        this.nextMoveConnection = 'left';
        break;
      case 40: // down  arrow
        if (this.currentMoveConnecton === 'down') break;
        this.nextMoveConnection = 'up';
        break;
      default: break;
    }
  }


  increaseSpeed() {
    if (this.currentSpeed <= this.speedLimit) return;
    this.currentSpeed = this.currentSpeed - this.speedStep;
    clearInterval(this.state.ticId);
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
    setTimeout(() => { this.gameOver(); }, 2000);
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

    setTimeout(() => { this.gameOver(); }, 2000);
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
    if (!this.gameIn) { return; }

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
      ticId: '',
      rabbit: '',
      bang: '',
    });

    this.snakeLogicArray = [];

    this.ticCounter = 0;
    this.nextMoveConnection = 'left';
    this.currentMoveConnecton = 'left';
    this.snake = React.createRef();
    this.lastHeadConnection = 'left';
    this.rabbitX = '';
    this.rabbitY = '';
    this.rabbitsEaten = 0;
    this.rabbitJustEaten = false;
    document.getElementsByClassName('board')[0].classList.remove('plaing');
  }


  /*
* headOnly - cheks if head coordinates equal to x,y
* wholeSnake - cheks if all pieces of the snake coordinates equal to x,y
* bodyAndTail - cheks if all pieces of the snake coordinates exept head equal to x,y
* borderCollision - cheks if head coordinates equal bordiers coordinates
*/
  checkSnakeCoordinates(x, y, typeOfCheck) {
    if (typeOfCheck === 'headOnly') {
      if (this.snakeLogicArray[0][1] === x && this.snakeLogicArray[0][2] === y) {
        return true;
      }
      return false;
    }

    if (typeOfCheck === 'wholeSnake') {
      for (let i = 0; i < this.snakeLogicArray.length; i++) {
        if (this.snakeLogicArray[i][1] === x && this.snakeLogicArray[i][2] === y) return false;
      }
      return true;
    }

    if (typeOfCheck === 'bodyAndTail') {
      for (let i = 1; i < (this.snakeLogicArray.length); i++) {
        if (this.snakeLogicArray[i][1] === x && this.snakeLogicArray[i][2] === y) return true;
      }
      return false;
    }

    if (typeOfCheck === 'borderCollision') {
      if (x >= (28 * 25) || y >= (20 * 25) || x <= -1 || y <= -1) return true;
      return false;
    }
    return false;
  }


  addHeadToLogicArray() {
    this.lastHeadConnection = this.nextMoveConnection;

    switch (this.nextMoveConnection) {
      case 'left':
        this.snakeLogicArray[0] = [
          this.snakeLogicArray[0][0],
          this.snakeLogicArray[0][1] + 25, // X coord
          this.snakeLogicArray[0][2], // Y coord
          'left',
          this.snakeLogicArray[0][4],
        ];
        break;

      case 'right':
        this.snakeLogicArray[0] = [
          this.snakeLogicArray[0][0],
          this.snakeLogicArray[0][1] - 25, // X coord
          this.snakeLogicArray[0][2], // Y coord
          'right',
          this.snakeLogicArray[0][4],
        ];
        break;

      case 'up':
        this.snakeLogicArray[0] = [
          this.snakeLogicArray[0][0],
          this.snakeLogicArray[0][1], // X coord
          this.snakeLogicArray[0][2] + 25, // Y coord
          'up',
          this.snakeLogicArray[0][4],
        ];
        break;

      case 'down':
        this.snakeLogicArray[0] = [
          this.snakeLogicArray[0][0],
          this.snakeLogicArray[0][1], // X coord
          this.snakeLogicArray[0][2] - 25, // Y coord
          'down',
          this.snakeLogicArray[0][4],
        ];
        break;

      default: break;
    }

    if (this.checkSnakeCoordinates(this.snakeLogicArray[0][1], this.snakeLogicArray[0][2], 'bodyAndTail') === true) {
      this.snakeGotItself(this.snakeLogicArray[0][1], this.snakeLogicArray[0][2]);
    }
    if (this.checkSnakeCoordinates(this.snakeLogicArray[0][1], this.snakeLogicArray[0][2], 'borderCollision') === true) {
      this.collision(this.snakeLogicArray[0][1], this.snakeLogicArray[0][2]);
    }
    if (this.checkSnakeCoordinates(this.rabbitX, this.rabbitY, 'headOnly') === true) {
      this.rabbitEaten();
    }
  }


  addNewBodyPieceToLogicArray() {
    const newBodyPiece = [];
    newBodyPiece[1] = this.snakeLogicArray[0][1]; // X coord
    newBodyPiece[2] = this.snakeLogicArray[0][2]; // Y coord

    if (this.lastHeadConnection === this.nextMoveConnection) {
      newBodyPiece[0] = 'body';
      newBodyPiece[3] = this.snakeLogicArray[0][3]; // direction
      newBodyPiece[4] = body; // img
    } else {
      newBodyPiece[0] = 'bodyCurve';
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
      newBodyPiece[3] = `${this.lastHeadConnection}-${nextConnection}`; // direction
      newBodyPiece[4] = bodyCurve; // img
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

    const lastPiece = this.snakeLogicArray[(this.snakeLogicArray.length - 1)];
    lastPiece[0] = 'tail';
    lastPiece[4] = tail;

    let connection;
    const dashPosition = lastPiece[3].indexOf('-');

    if (dashPosition === -1) {
      connection = lastPiece[3];
    } else {
      connection = lastPiece[3].slice(dashPosition + 1);
      lastPiece[4] = tailUSD;
    }

    lastPiece[3] = connection;

    this.snakeLogicArray[(this.snakeLogicArray.length - 1)] = lastPiece;
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
      const style = { left: (`${this.snakeLogicArray[i][1]}px`), top: (`${this.snakeLogicArray[i][2]}px`) };
      renderArray.push(
        <img
          key={`${this.snakeLogicArray[i][1]} ${this.snakeLogicArray[i][2]}`}
          src={this.snakeLogicArray[i][4]}
          alt=""
          className={`${this.snakeLogicArray[i][0]} ${this.snakeLogicArray[i][3]}`}
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
          <div className="toPlay">To play the game use cursor keys and space</div>
          <div className="difficultyLevel">
            Your difficulty level is
            <span className="info">{this.difficultyLevel}</span>
          </div>

          <div className="speedRPS">
            Your current speed is
            <span className="info">{this.state.speedRPS}</span>
              rabbits per second
          </div>

          <div className="rabbitsToWin">
            You have to eat
            <span className="info">{this.state.rabbitsToWin}</span>
            more rabbits to win
          </div>

          <div className="technologyStack">
            Technology stack for this game: React.js, javascript (ES6), css, html
          </div>
          <div className="github">
            You can get the source code of this game at my
            <span className="info"><a href="https://github.com/KEH9">github</a></span>
            account
          </div>

          <div className="offerAJob">
            If you want to
            <br />
            <span className="info">offer me a job</span>
            <br />
            you can download my
            <span className="info"><a href="innokentiy-kuznetsov.doc">resume</a></span>
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

export default Game;
