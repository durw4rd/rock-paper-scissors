import React from 'react';

class NewGameComponent extends React.Component {
  createGame(event) {
    event.preventDefault();
    console.log("Create Game Called!");
    let newPlayer = this.refs.playerName.value;
    this.props.onCreate(newPlayer);
  }

  render(){
    return(
      <form onSubmit={this.createGame.bind(this)}>
        <div>
          <label>New Player: </label>
          <input type="text" ref="playerName" placeholder="Enter your name"/>
        </div>
        <div>
          <input type="submit" value="Create Game"/>
        </div>
      </form>
    );
  }
}

export default NewGameComponent;
