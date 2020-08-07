import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoList.css';
import ImgRemove from '../images/remove.png';

class TodoListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id
        }
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(){
        this.props.deleteItem(this.state.id);
    }
    render(){
        return(
            <ul className="Todolist-Item">
                {this.props.name}
                <img className="ImgRemove" src={ImgRemove} onClick={this.deleteItem}/>
            </ul>
        );
    }
}

TodoListItem.propTypoes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default TodoListItem;