import React, { Component } from 'react';

class TodoItem extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
				isDone: this.props.isDone
			};
	}

	render()
	{
		const handleChange = () => { this._handleChange(); }

		return (
			<div>
			<li key={this.props.id}> 
				<b>{this.props.title}</b> | 
				{this.props.body} | <input type="checkbox" checked={this.state.isDone} onClick={handleChange} /> <i>is done? </i>
			</li></div>);
	}

	_handleChange()
	{
		let todoStatus = this.state.isDone;

    let bodyJson = {
      	todo: {
        		title: this.props.title,
        		body: this.props.body,
        		is_done: !todoStatus
      			}
    		};

		let promise = fetch('http://localhost:3000/todos/' + this.props.id + '', {
  			method: 'PUT',
  			headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
  			},
  			body: JSON.stringify(bodyJson)
  			});

  	promise.then(response => { 
  		this.setState({isDone: !todoStatus});
  		console.log(this.state.isDone);
    });

    promise.catch((response) => { 
    	this.setState({isDone: todoStatus}); 
  		console.log(this.state.isDone);
			console.log(response); });
    };
}

export default TodoItem;