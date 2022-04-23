
import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  
  render() {

    return (
      <form className="newtodo" onSubmit = {this.props.addTodo}>
        <h2><button className="finish"> </button> Check</h2>
      </form>
    );
  }
}

export default NewTodo;
