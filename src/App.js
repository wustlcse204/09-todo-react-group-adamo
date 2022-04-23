import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: []}
  }
  updateTodo() {
    this.setState({todos: new NewTodo()})
  }
  render() {
    return (
      <section id = "todos">
        <NewTodo />
        {this.state.todos.map((Todo))} 
        <Todo key= {todo.id}
        text = {todo.text} />
    
      <div className="app">
        <h1>Adam Oubaita ToDo App</h1>
        <input type="text" id="new-task" placeholder="Complete"></input>
        <input type="button" onClick="apiCall()" id="add-item-button" class = "add-item-button" value ="Add"></input>
        <section id ="myTodos"><Todo /> </section>
        <section id = "newtodos"> </section>
        <script src = "NewTodo.js"></script>
      </div>
      </section>
    );
  }

  apiCall() {
    fetch("x-api-key","ea8ab2-ab5cb1-9254fd-35e967-531f0c").then(function (response) {
      this.setState({todos: JSON.parse(response)
      });
      return this.state;
    })
  }

  componentDidMount() {
    //api call
    this.apiCall();
    console.log('componentDidMount() lifecycle')
    }
  
  componentWillUnmount() {
    document.removeEventListener("click", deleteItem);
  }

  componentWillUpdate() {
    const toOrder= this.state.todos
    toOrder.sort()
    this.setState({todos: toOrder});
  }
  
}
function deleteItem() {
  var id = this.parentNode.id;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById(id).remove();
      } 
      else if (this.readyState == 4) {
          console.log(this.responseText);
      }
  };
  xhttp.open("DELETE", "https://cse204.work/todos/"+id, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("x-api-key", "ea8ab2-ab5cb1-9254fd-35e967-531f0c");
  xhttp.send();
}
export default App;
