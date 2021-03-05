import React, { useEffect, useState } from 'react';
import RestController from './RestController'

function GameSimulationTrigger() {
    const [number_sims, setNumberOfSims] = useState(0);

    function handleNumberOfSimsChange(e) {
        console.log(e.target.value);
        setNumberOfSims(e.target.value)
    }

    useEffect(() => {
        return (<RestController total_simulations={number_sims} />)
    }, [number_sims])

    return (
        <div>
            <form type="submit" onSubmit={handleNumberOfSimsChange}>
                <label htmlFor="number_sims">Number of simulations</label>
                <input type="input" id="nrsims" value={number_sims} onChange={handleNumberOfSimsChange}/>
                <button id="start_sim" type="submit">Start simulation</button>
            </form>
        </div>
    );
}


export default GameSimulationTrigger;