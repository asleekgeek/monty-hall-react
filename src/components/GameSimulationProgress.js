import React, { useState, useEffect } from 'react';

function GameSimulationProgress(data) {
    const [game_number, setProcessedGames] = useState(0);
    const [switched_players_pecentage,  setPercentageOfPlayersThatSwitched] = useState(0);
    const [player_that_switched_win_percentage, setPercentageOfPlayersThatSwitchedAndWon] = useState(0);

    useEffect(() => {
        const data_process = () => {
            setProcessedGames(data.game_number);

            const switched = data.filter(pw => { return  pw.player_switched === true; });
            setPercentageOfPlayersThatSwitched((switched.reduce((a, b) => a + b, 0) * 100) / game_number);

            const switched_and_won = data.filter(pw => { return  pw.player_switched === true && pw.player_won === true});
            setPercentageOfPlayersThatSwitchedAndWon(((switched_and_won.reduce((a, b) => a + b, 0)) * 100) / game_number);
        }

        data_process();

        return (
            <div>
                <h3>Games simulatioins prodessed so far</h3>
                <ul>{data.map(data.number_sims)}</ul>
                <ul><h3>Players that switched :</h3> {switched_players_pecentage}</ul>
                <ul><h3>Players that switched and won /percentage/ :</h3> {player_that_switched_win_percentage}</ul>
            </div>
        );
    });
}

export default GameSimulationProgress;
