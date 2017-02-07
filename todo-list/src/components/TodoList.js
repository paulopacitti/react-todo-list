import React, { Component } from 'react';
import TodoItem from './TodoItem.js'

class TodoList extends Component
{
	constructor()
	{
		super();
		this.state ={
				items: []
			};
	}

	render()
	{
		let tasks = this.state.items.map((item) => <TodoItem isDone={item.is_done} key={item.id} id={item.id} title={item.title} body={item.body} />);
		return (<div className="todo-list">
				<ul>
					{tasks}
				</ul>
				</div>);
	}

	componentDidMount() 
	{
		this._getFromAPI(); 
	}

	_getFromAPI()
	{
		fetch('http://localhost:3000/todos', {
  			method: 'GET',
  			headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
  			}
  		}).then(response => response.json()).then(response => this.setState({ items: response}));
  	}
}

export default TodoList;