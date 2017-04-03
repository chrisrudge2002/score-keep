import FlipMove from 'react-flip-move';
import React from 'react';

import Player from './Player';

class PlayerList extends React.Component {
	renderPlayers() {
		if (this.props.players.length === 0) {
			return (
				<div className="item">
					<p className="item__message">Add your first player to get started!</p>
				</div>
			);
		} else {
			return this.props.players.map(player => <Player key={player._id} player={player}/>);
		}
	}
	render() {
		return (
			<div>
				<FlipMove maintainContainerHeight={true}>
					{this.renderPlayers()}
				</FlipMove>
			</div>
		);
	}
}

PlayerList.propTypes = {
	players: React.PropTypes.array.isRequired
};

export default PlayerList;
