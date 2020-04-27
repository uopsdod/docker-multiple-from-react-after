import React, { Component } from 'react';

class UIComponent extends Component {

	constructor(props){
		super(props);	
		this.state = {
			count : null,
			name : ""
		}	
	}

	componentDidMount(){
		this.getUserList();
	}

	getUserList = (event) =>
	{
		console.log("UIComponent.js - getUserList() called");
		console.log("UIComponent.js - getUserList() called - this.props.getSth: " , this.props.getUserList);
		// call redux store function 
		// it will eventually update the Redux state and this UI will reflect the this.props.myCount change automatically
		this.props.getUserList();

		console.log("UIComponent.js - getUserList() called - this.props: " , this.props);

	}

	addUser = (event) =>
	{
		console.log("UIComponent.js - addUser() called");
		this.props.addUser(this.state.name);

	}

	handleNameChange = (event) =>
	{
		console.log("UIComponent.js - handleNameChange() called");
		this.setState({name: event.target.value});
	}
	


	render() {
		return (
			<div>
				<h1>Docker demo - multiple FROM</h1>
				<h1>1GB -> 100MB (ex. 體重80公斤->8公斤) </h1>
			</div>
		);
	}	
}


export default UIComponent;
