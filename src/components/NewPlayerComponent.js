import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const buttonStyle = {
 margin: 12,
};

const newPlayerStyle = {
  background: "#999",
  padding: "15px"
}

const pStyle = {
  display: "inline",
  fontFamily: "Roboto",
  fontSize: "20px",
  color: "#333"
}

const p2Style = {
  fontFamily: "Roboto",
  fontSize: "20px",
  color: "#333",
  padding: "2px"
}

class NewPlayerComponent extends React.Component {
  createPlayer(event) {
    event.preventDefault();
    console.log("Create Player Called!");
    let newPlayer = this.refs.playerName.value;
    this.props.onCreate(newPlayer);
    this.refs.playerName.value = "";
  }

  render() {
    return(
      <form style={newPlayerStyle}>
        <div>
          <p style={pStyle}>Player Name: </p>
          <input style={p2Style} type="text" ref="playerName" placeholder=" What's your name?"/>
          <RaisedButton onClick={this.createPlayer.bind(this)} label="Save" primary={true} style={buttonStyle} />
        </div>
      </form>
    );
  }
}

export default NewPlayerComponent;
