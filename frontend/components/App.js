import React, { useEffect } from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todoText: '',
      todos: []
    }
  }

  completeTask = (value) => {

    console.log("selected value: ", value)

    this.setState(prevState => {
      const todos = [...prevState.todos];
      todos[value].completed = !todos[value].completed;
      return { todos };
    });

    console.log("array: ",this.state.todos)

  }

  hideCompleted = () => {
    this.setState(prevState => {
      const todos = [...prevState.todos].filter((item) => item.completed === false);
      return { todos }
    })
  }

  handleChange = (e) => {
    this.setState({ todoText: e.target.value })
  }

  submitTodo = (e) => {

    e.preventDefault()
    
    this.setState(prevState => ({
      todos: [...prevState.todos, { text: prevState.todoText, completed: false }],
      todoText:  ''
    }))

  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} completeTask={this.completeTask} />
        <Form todoText={this.state.todoText} handleChange={this.handleChange} submitTodo={this.submitTodo} hideCompleted={this.hideCompleted} />
      </div>
    )
  }
}
