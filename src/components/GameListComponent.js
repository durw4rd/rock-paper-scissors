import React from 'react';
import GameListItemComponent from './GameListItemComponent';
import List from 'material-ui/lib/lists/list';
import Colors from 'material-ui/lib/styles/colors';

class GameListComponent extends React.Component {
  selectGame(game) {
    this.props.onSelect(game);
  }

  render() {
    let component = this;
    return (
      <List subheader="Recent games" subheaderStyle={ {fontSize: "20px", color: Colors.purple500 } }>
        {this.props.games.map(function(game) {
          return (<GameListItemComponent key={game._id} game={game} currentPlayer={component.props.currentPlayer} onClick={component.selectGame.bind(component)}/>)
        })}
      </List>
    );
  }
}

export default GameListComponent;
