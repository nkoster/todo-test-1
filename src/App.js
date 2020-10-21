import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const LOCAL_STORAGE_KEY = 'dronekey'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([todo, ...todos])
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }
  
  useEffect(_ => {
    const localStorageTodos = 
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (localStorageTodos) {
      setTodos(localStorageTodos)
    }
  }, [])

  useEffect(_ => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App-header">
      <Typography
        style={{ padding: 16 }}
        variant='h3'
      >TO DO APP</Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  )

}

export default App
