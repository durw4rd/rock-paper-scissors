import React from 'react';
import GameModel from './models/GameModel';
import NewGameComponent from './components/NewGameComponent';
import GameListComponent from './components/GameListComponent';
import Blink from './Blink';

class App extends React.Component {
  constructor(){
    super();

    this.games = new GameModel();
    this.games.subscribe(this.updateList.bind(this));

    this.state = {
      games: [],
      currentGame: null
    };
  }

  componentDidMount() {
    this.games = new GameModel();
    this.games.subscribe(this.updateList.bind(this));
  }

  updateList() {
    this.setState({
      games: this.games.resources
    });
  }

  createGame(newPlayer) {
    this.games.addResource({
      playerOne: newPlayer
    });
  }

  containerStyles() {
    return {
      width: "500px",
      height: "500px",
      margin: "auto",
      marginTop: "50px"
    };
  }

  headerStyle() {
    return {
      textAlign: "center",
      background: "#A723B2",
      color: "#00B289",
      paddingTop: "25px",
      fontSize: "60px"
    };
  }

  selectGame(game) {
    this.setState({
      currentGame: game
    });
  }

  render() {
    return (
      <div style={this.headerStyle()}>
        <h1 style={this.containerStyles()}>Rock Paper Scissors!></h1>
        <NewGameComponent onCreate={this.createGame.bind(this)}/>
        <GameListComponent games={this.state.games} onSelect={this.selectGame.bind(this)}/>
      </div>
    );
  }
}

export default App;
