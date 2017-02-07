import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'

class App extends Component {
  render() {
    return (
    	<div>
    		<h1 className="app-title"><img className="app-icon" src={require('./memo.png')} height="26px" width="26px"/> &nbsp;todos list </h1>
      		<TodoInput />
      		<br/>
      		<TodoList />
      	</div>
    );
  }
}

export default App;