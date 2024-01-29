import {type ListOfTodos } from "../../types/types";
import {type ITodo } from "../../interfaces/interfaces";
import { Todo } from "../Todo/Todo";

interface Props {
  todos: ListOfTodos,
  onRemoveTodo: (id: number) => void;
}

export const Todos: React.FC<Props> = ({todos, onRemoveTodo}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo: ITodo) => (
        <li key={todo.id} className={`${todo.completed ? "complete" : ""}`}>
          <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}