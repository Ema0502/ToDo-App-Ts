import { useState } from 'react'
import './App.css'
import { Todos } from  './components/Todos/Todos'
import { type ITodo as TodoType } from './interfaces/interfaces';

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

  const handleCompleted = ({ id, completed }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id){
        return  {
          ...todo, 
          completed
        };
      }
        return todo;
    })
    setTodos(newTodos);
  }

  return (
    <div className="todoapp">
      <Todos 
      onToggleCompleteTodo={handleCompleted}
      todos={todos}
      onRemoveTodo={handRemove}
      />
    </div>
  )
}

export default App
