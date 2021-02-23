import React, { Fragment, useEffect, useState } from 'react';

function GameSimulationTrigger() {
    const [number_sims, setNumberOfSims] = useState(0);

    return (
        <Fragment>
            <RestController number_sims={number_sims} data={() => dispatch(setNumberOfSims(number_sims))} />;
            <form type="submit" onSubmit={e => setNumberOfSims(e.target.value)}>
                <label htmlFor="number_sims">Number of simulations</label>
                <input type="input" id="nrsims" value={number_sims} onChange={e => setNumberOfSims(e.target.value)}/>
                <button id="start_sim" type="submit">Start simulation</button>
            </form>
            event.preventDefault();
        </Fragment>
    );
}


export default GameSimulationTrigger;