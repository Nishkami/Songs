import React, {Component, useEffect, useState} from 'react';
import './App.css';
import {Button, Table} from 'reactstrap';
import * as assert from "assert";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home} from "./components";
function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={() => <Home />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
/*
function App () {
	const [isLoading, setIsLoading] = useState(true);
	const [songs, getSongs] = useState([]);
	useEffect(() => {
		fetch(
			`https://r5c0d1qq27.execute-api.us-east-2.amazonaws.com/beta`
		)
			.then(res => res.json())
			.then(response => {
				getSongs(response.items);
				setIsLoading(false);
			})
			.catch(error => console.log(error));
	});


		return (
			<div classname="container boarder border-secondary rounded center">
				<div classname="row">
					<div classname="col-12">
						<h4>Songs </h4>
					</div>
				</div>

				<div classname="row">
					<div classname=".col-xs-12 center text-center">
						<Table dark responsive striped bordered hover>
							<thead>
							<th> Songs</th>
							<th> Artist</th>
							<th> Song Release Date</th>
							<th> Playcount</th>
							<th> Metric A</th>
							<th> Songs</th>

							</thead>
							<tbody>
							getSongs.map( (songs) => (
							<tr>{"_1".songs}</tr>
							<tr>{songs.artist}</tr>
));
							</tbody>
						</Table>
					</div>
				</div>

			</div>

		);
	}
	
	export default App;
	*/

