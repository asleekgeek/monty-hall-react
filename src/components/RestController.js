import React, {useEffect, useState} from 'react';
import axios from 'axios';

function RestController(number_sims) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const [data, setData] = useState();
    const dispatch = useContext(GameSimulationProgressDispatch);

    useEffect(() => {
        function fetchSimulationData() {
            // Simple GET request with a JSON body using fetch
            const result = fetch(`https://localhost:3000/monty_hall_simulations/${number_sims}`, requestOptions)
                .then((json) => response.json());
            setData(result.data);
            dispatch(type = "assign");
        }},

        fetchSimulationData()
    )([number_sims]);

	return (<div>{data}</div>);
}

export default RestController;