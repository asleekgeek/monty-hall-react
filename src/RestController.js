import React from 'react';

export class RestController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            error: null,
            game_data: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
	}

    handleSubmit(event) {
        fetch('https://localhost:3000/monty_hall_simulations/', {
			method: 'GET',
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
            arguments: {"n": document.getElementById("number_sims").value }
        })
        .then(response => response.json())
        .then(json => {this.setState({ game_data:json })},
        (error) => {
            this.setState({
                error
            });
        });

        event.preventDefault();
    }

	render() {
        <form onSubmit={this.handleSubmit} method="GET">
            <p>
                <label htmlFor="number_sims">Number of simulations</label>
                <input type="number" id="number_sims" name="number_sims" />
            </p>
            <p>
                <input type="submit" value="Start simulation" />
            </p>
        </form>
    }
}

export default RestController;