import React, { Component } from 'react';
import { RestController } from './RestController';

export class GameSimulationProgress extends Component {
    constructor(props) {
		super(props);
		this.state = {
            switched_players_pecentage = 0,
            player_won_percentage = 0,
            error: null,
            game_data: []
        };
	}

    percentageOfPlayersThatSwitched() {
        this.setState(state => {
            switched_players_pecentage = (state.game_data.sum(player_switched) * 100) / state.game_number;
            if (!isNaN(switched_players_pecentage) && result !== Infinity) {
                return {
                    switched_players_pecentage
                };
            } else {
                return {
                    switched_players_pecentage: "Invalid value"
                };
            }
            });
    }

    percentageOfPlayersThatSwitchedAndWon() {
        if(state.game_data.player_won && state.game_data.player_switched) {
        this.setState(state => {
            player_won_percentage = (state.game_data.sum(player_won) * 100) / state.game_number;
            if (!isNaN(player_won_percentage) && result !== Infinity) {
                return {
                    player_won_percentage
                };
            } else {
                return {
                    player_won_percentage: "Invalid value"
                };
            }
            });
        }
    }

    render() {
        <RestController game_data={game_data} />;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div>
                    <p><b>Game simulations so far</b></p>
                    <p>Game simulater: {this.state.game_data.game_number}</p>
                    <p>Player Switched % so far: { percentageOfPlayersThatSwitched() }</p>
                    <p>Player Won by switching so far: {game_data.player_won}</p>
                </div>);
        }
    }
}

const RestController = ({ game_data }) => { game_data.game_number, game_data.player_switched, game_data.player_won };

export default GameSimulationProgress;