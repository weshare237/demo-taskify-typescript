import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './model'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault()

    if (todo) {
      const newTodo: Todo = {
        id: Date.now(),
        todo,
        isDone: false,
      }

      setTodos([...todos, newTodo])
      setTodo('')
    }
  }

  console.log(todos)

  return (
    <div className='App'>
      <span className='heading'>Demo Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  )
}

export default App
