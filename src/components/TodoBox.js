import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoBox.css';
class TodoBox extends Component {
    constructor(props){
        super(props);

        this.state={
            inputValue : ''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        
        this.props.onSubmit(e);
        this.setState({inputValue: ''});
    }
    getInputValue(){
        return this.state.inputValue;
    }
    render(){
        return (
            <div className="Todobox">
              <form onSubmit={this.onSubmit}>
                <input type="text" 
                        value={this.state.inputValue}
                        onChange={(e) => {this.setState({inputValue : e.target.value})}}
                        className="Todobox-input"
                        placeholder="Agrega una nueva tarea"
                        />
                <input type="submit" value="Agregar" className="Todobox-button"/>
              </form>
            </div>
          );
    }
}

TodoBox.propTypes={
    onSubmit: PropTypes.func.isRequired
}

export default TodoBox;
