import React, { useState } from 'react';
import RestController from './RestController';

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'assign':
            return { data: state.number_sims };
        default:
            throw new Error();
    }
}

function GameSimulationProgress() {
    const initialState = {number_sims: 0};;
    const [state, dispatch] = useReducer(dataFetchReducer, {
        isError: false,
        number_sims: initialState
    });

    const [data, se] = useState([{"game_number": "", "player_switched": false, "player_won": false}]);
    const [switched_players_pecentage,  percentageOfPlayersThatSwitched] = useState(0);
    const [player_that_switched_win_percentage, percentageOfPlayersThatSwitchedAndWon] = useState(0);
    const [sims_data, dispatch] = useReducer(gameSimulationProgressReducer);

    useEffect(() => {
        () => { percentageOfPlayersThatSwitched() }
        () => { percentageOfPlayersThatSwitchedAndWon() }

        console.log("Game number: " + data["G"]),
        console.log(this.percentageOfPlayersThatSwitched),
        console.log(this.percentageOfPlayersThatSwitchedAndWon)
    });

    percentageOfPlayersThatSwitched(() => {
        switched = data.filter(pw => { return  pw.player_switched === true; });
        switched_players_pecentage = (switched.reduce((a, b) => a + b, 0) * 100) / this.state.game_number;
    });

    percentageOfPlayersThatSwitchedAndWon(() => {
        switched_and_won = data.filter(pw => { return  pw.player_switched === true && pw.player_won === true});
        player_that_switched_win_percentage = ((switched_and_won.reduce((a, b) => a + b, 0)) * 100) / this.state.game_number;
    });

    return (
        <div>
            <ui>data["game_number"]</ui>
        </div>
    );
}

export default GameSimulationProgress;
