import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <article id = "{this.props.id}" className="todo">
            <h2><button className="finish"> </button> </h2>
            <p>{this.props.text}</p>
      </article>
    );
  }
}

export default Todo;
