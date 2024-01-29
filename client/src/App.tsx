import { useState } from 'react'
import './App.css'
import { Todos } from  './components/Todos/Todos'

const App = ():  JSX.Element => {

  const mokTodos = [
    {
      id: 1,
      title: "Buy groceries",
      completed: false
    },
    {
      id: 2,
      title: "Go for a run",
      completed: true
    },
    {
      id: 3,
      title: "Study React",
      completed:  false
    }
  ]

  const [todos, setTodos] = useState(mokTodos);

  const handRemove = (id:  number) : void =>{
    // filter out the todo with the given ID
    const newTodos = todos.filter((todo) =>  todo.id !== id )
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos 
      todos={todos}
      onRemoveTodo={handRemove}
      />
    </div>
  )
}

export default App
