import React, { Component } from 'react';
import './TodoInput.css';

class TodoInput extends Component
{
	constructor()
	{
		super();

    let _titleInput = null;
	}

	render()
	{
   // const handleInsert = this._handleInsert();

		return(
      <div>
    		<div>
        		<b>title:</b>&nbsp; <input type="text" ref={ (input) => this._titleInput = input} />
   	 		</div>
    		<div>
        		<b>task:</b> <input type="text" ref={ (input) => this._body = input} />
    		</div>
    		<br/>
    			<input type="submit" onClick={this._handleInsert.bind(this)} value="add" />
      </div>
			);
	}

	_handleInsert(e)
	{
    let title = this._titleInput.value;
    let body = this._body.value;
    let isDone = false
    let bodyJSON = { 
      todo: { 
              title: title, 
              body: body, 
              is_done: isDone
            }
          };

		let promise = fetch('http://localhost:3000/todos/', {
  			method: 'POST',
  			headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
  			},
  			body: JSON.stringify(bodyJSON)
  			});

    promise.then( () => {alert("task added!") ; location.reload();});
    promise.catch( () => { alert("error!")  });
	}
}

export default TodoInput;