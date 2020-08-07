import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoList.css';
import TodoListItem from '../components/TodoListItem';
import recycle from '../images/recycle-bin.svg';

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            item: this.props.item,
            items:[],
            labelTodo: "No hay ToDo's, tomate un café!!"
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.deleteAllItems = this.deleteAllItems.bind(this);
       
    }
    componentWillReceiveProps(nextProps){
        let inputValue = nextProps.item;
        this.setState({items: this.state.items.concat(inputValue)});
    }
    deleteItem(idItem){
      const itemsActualizados = this.state.items.filter((item, index) => index != idItem);
      this.setState({items: itemsActualizados});
      
    }
    deleteAllItems(){
        this.setState({items: []});
       
    }
    actualizaLabel = () => {
        if(this.state.items.length > 0){
            this.setState({labelTodo: ""});
        }
    }
    componentDidUpdate(){
        if(this.state.items.length > 0)
            document.getElementById("msgTodo").style.display="none";
        else
        document.getElementById("msgTodo").style.display="";
    }
  render(){  
    let items = this.state.items.map((currentValue, index, array) => {
        return(
            <TodoListItem name={currentValue} key={ index } id={ index } deleteItem={this.deleteItem}/>            
        );
    });
    
    return (
        <div className="Todolist">
            <div className="Todolist-Header">
                ToDo list by Iron Bit 
                <img src={recycle} class="ImgRecycle" onClick={this.deleteAllItems}/>
            </div>
            <div className="Todolist-Body">
                <h4 id="msgTodo" className="Todolist-body">{this.state.labelTodo}</h4>
                { items }
            </div>
        </div>
      );
  }
}

TodoList.propTypes = {
    item: PropTypes.string.isRequired
}

export default TodoList;
