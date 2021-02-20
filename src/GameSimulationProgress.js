import React, { Component } from 'react';
import RestController from './RestController';

export class GameSimulationProgress extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            error: null,
            data: this.props.game_data
        };
        this.switched_players_pecentage = 0;
        this.player_that_switched_win_percentage = 0;
	}

    componentDidMount() {
        this.percentageOfPlayersThatSwitched();
        this.percentageOfPlayersThatSwitchedAndWon();
        console.log(this.state.game_number);
        console.log(this.percentageOfPlayersThatSwitched);
        console.log(this.percentageOfPlayersThatSwitchedAndWon);
    }

    percentageOfPlayersThatSwitched() {
        let switched = this.state.data.filter(pw => { return  pw.player_switched === true; });
        this.switched_players_pecentage = (switched.reduce((a, b) => a + b, 0) * 100) / this.state.game_number;
        if (!isNaN(this.switched_players_pecentage) && this.switched_players_pecentage !== Infinity) {
            return this.switched_players_pecentage;
        } else {
            this.setState( this.error );
            return { switched_players_pecentage: "Invalid value"
         }
        }

    }

    percentageOfPlayersThatSwitchedAndWon() {
        let switched_and_won = this.state.data.filter(pw => { return  pw.player_switched === true && pw.player_won === true})
        this.player_that_switched_win_percentage = ((switched_and_won.reduce((a, b) => a + b, 0)) * 100) / this.state.game_number;
        if (!isNaN(this.player_that_switched_win_percentage) && this.player_that_switched_win_percentage !== Infinity) {
            return this.player_that_switched_win_percentageplayer_that_switched_win_percentage;
        } else {
            return {player_that_switched_win_percentage: "Invalid value"};
        }
    }


    render() {
        <RestController data={this.data} />;
        if (this.error) {
            return <div>Error: {this.error.message}</div>;
        }
        return (
            <div>
                <p><b>Game simulations so far</b></p>
                <p>Game simulater: {this.state.game_number}</p>
                <p>Player Switched % so far: {this.percentageOfPlayersThatSwitched}</p>
                <p>Player Won by switching so far: {this.percentageOfPlayersThatSwitchedAndWon}</p>
            </div>);
        }
}


export default GameSimulationProgress;