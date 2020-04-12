import React from 'react';

class ErrorBoundry extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false;
		}
	}

	componentDidCatch(error, info){
		this.setState({ hasError: true});
	}

	render(){
		console.log('test');
		if(this.state.hasError){
			return <h1> Deu Ruim </h1>;
		}
		return this.props.children
	}
}

export default ErrorBoundry;