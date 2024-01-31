import { useState } from 'react'
import './App.css'
import { Todos } from  './components/Todos/Todos'
import { type ITodo as TodoType } from './interfaces/interfaces';
import { TODO_FILTERS } from './consts';
import { FilterValue, TodoTitle } from './types/types';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterSelected = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo;
  })

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo)=>!todo.completed);
    setTodos(newTodos);
  }

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      title,
      id: parseInt(crypto.randomUUID()),
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos 
      onToggleCompleteTodo={handleCompleted}
      todos={filteredTodos}
      onRemoveTodo={handRemove}
      />
      <Footer
      activeCount={activeCount}
      completedCount={todos.length - activeCount}
      onClearCompleted={handleRemoveAllCompleted}
      filterSelected={filterSelected}
      handleFilterChange={handleFilterSelected}
      />
    </div>
  )
}

export default App
