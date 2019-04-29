import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Container, Button, ButtonGroup } from 'reactstrap';
import Particle from 'particle-api-js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			particle: '',
			token: '',
			d_id: 'PARTICLE DEVICE ID'
		}
  	}

	componentDidMount = () => {
		let tok;
		var p = new Particle();
		p.login({username: 'PARTICLE ACCOUNT EMAIL', password: 'PARTICLE ACCOUNT PASSWORD'})
		.then(
			(data) => {
				tok = data.body.access_token;
				console.log('Logged in successfully.');
				this.setState({
					token: tok,
					particle: p
				})
			},
			(err) => {
				console.log('Could not log in.', err);
			}
		);
	}

	ledOn = () => {
		var fnPr = this.state.particle.callFunction({deviceId: this.state.d_id, name: "led", argument: 'on', auth: this.state.token });
		fnPr.then(
			(data) => {
				console.log('LED toggled on', data);
			},
			(err) => {
				console.log('An error occurred:', err);
			}
		);
	}

	ledOff = () => {
		var fnPr = this.state.particle.callFunction({deviceId: this.state.d_id, name: "led", argument: 'off', auth: this.state.token });
		fnPr.then(
			(data) => {
				console.log('LED toggled off', data);
			},
			(err) => {
				console.log('An error occurred:', err);
			}
		);
	}

	render() {
		return (
			<Container className="App">
				<Jumbotron>
					<ButtonGroup size="lg">
						<Button className="button" onClick={() => this.ledOn()}>
							LED ON
						</Button>
						<Button className="button" onClick={() => this.ledOff()}>
							LED OFF
						</Button>
					</ButtonGroup>
				</Jumbotron>
			</Container>
		);
	}
}

export default App;
