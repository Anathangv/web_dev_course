import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
  	console.log('test');
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    console.log('test2');
    return this.props.children; 
  }
}

export default ErrorBoundry;

/*import React from 'react';

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
*/