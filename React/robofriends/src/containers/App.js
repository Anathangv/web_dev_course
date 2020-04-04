import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
	
	constructor(){

		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json()
			})
			.then(users => {
				this.setState({ robots: users})
			})
	}

	myOnSearchChange = (event) =>{
		console.log(event.target.value);
		this.setState({searchfield:event.target.value});
	}

	render(){

		const filteredRobots = this.state.robots.filter( robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if (!this.state.robots.length){
			return <h1>Loading</h1>
		}else{
			return(
				<div className='tc'>
					<h1 className='f1'>RobotFiend</h1>
					<SearchBox mySearchChange={this.myOnSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>	
					</Scroll>
				</div>
			);
		}
	}
}

export default App;