import React, { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <p>TO DO APP</p>
        <Todo />
      </header>
    </div>
  )
}

export default App
