import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';

import App from './../imports/ui/App';
import {Players, calculatePlayerPositions} from './../imports/api/players';

Meteor.startup(() =>
	Tracker.autorun(() => {
		const players = Players.find({}, {sort: {score: -1}}).fetch();
		const positionedPlayers = calculatePlayerPositions(players);
		const title = 'Score Keep';
		ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
	})
);
