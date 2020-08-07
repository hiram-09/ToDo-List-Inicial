import React, { Component } from 'react';

import './styles/App.css';
import TodoBox from './components/TodoBox';
import TodoList from './components/TodoList';
import imgIronbit from './images/ico-logo.png';

class App extends Component{
  constructor(){
    super();
    this.state = {
      item: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(){
    let todoListValue = this.refs.todobox.getInputValue();
    if("" !== todoListValue)
      this.setState({item: todoListValue});
    else
      alert("El campo no puede estar vacío");
  }
  render(){
    return (
      <div className="App">
        <div className="App-Header">
          <img src={imgIronbit} />  
          <h2 className="App-Tittle">Frontend Test </h2>        
        </div>
        <div className="App-Body">
          <TodoBox ref="todobox" onSubmit={this.onSubmit}/>
          <TodoList item={this.state.item}/>
        </div>
      </div>
    );
  }  
}

export default App;
