import {type ListOfTodos } from "../../types/types";
import {type Todo } from "../../interfaces/interfaces";

interface Props {
  todos: ListOfTodos
}

export const Todos: React.FC<Props> = ({todos}) => {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  )
}