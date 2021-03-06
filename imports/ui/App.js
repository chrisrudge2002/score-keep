import React from 'react';

import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar';

class App extends React.Component {
	render() {
		return (
			<div>
				<TitleBar title={this.props.title}/>
				<div className="wrapper">
					<PlayerList players={this.props.players}/>
					<AddPlayer/>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	title: React.PropTypes.string.isRequired,
	players: React.PropTypes.array.isRequired
};

export default App;
