import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
//import { robots } from './robots';
import Scroll from '../components/Scroll'
import './App.css';

//React lifecycle methods
//Mounting, updating, and unmounting
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		//every time input changes
		//we get event
		//console.log(event.target.value);
		//just need to remember how event structure works.
		this.setState({ searchfield: event.target.value });
		//this is a react method to change state
		//because value event comes from input, the value of "this" is input
		//using the syntax of the arrow function makes sure that "this" refers
		//to the correct "this"
	}
	render() {
		const filterRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filterRobots}/>
				</Scroll>
			</div>
		); //Because App owns state, then it can use it, cardlist still accepts
		//robots as a prop
	}

}

/*
App component has two states, robots and searchfield
Any class that owns state has class syntax so that it can
use the contructor function to create this.state

virtual dom is an object that collects the state and then
renders it

App is the only one that can change the state, but it can
pass down props other components.

Note that robots never changes, we just keep creating a new
array (filteredRobots) and passing that to CardList

So we actually don't need robots in the state.  In most cases
you're using something like a DB and getting info from elsewhere
so you will need a state in those cases.
*/

export default App;