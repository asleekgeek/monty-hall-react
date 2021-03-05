import React, {useEffect, useState } from 'react';
import GameSimulationProgress from './GameSimulationProgress'

function RestController(total_smulations) {
    const [pre_calc_simulations, setSimulations] = useState([])

    const getSimulations = () => {
        try {
            const simulations = () => {
                fetch(`https://localhost:3000/monty_hall_simulations/${total_smulations}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
                .then(setSimulations(simulations.data))
            }
            console.log(simulations.data);
        } catch (err) {
            console.error(err.message);
        };
    }

    useEffect(()=> {
        getSimulations()

        const interval=setInterval(()=>{
            getSimulations()
        },100)

        return()=>clearInterval(interval)
    })([])

     return (
        <div><GameSimulationProgress data={pre_calc_simulations} ></GameSimulationProgress></div>
    )
}

export default RestController;
