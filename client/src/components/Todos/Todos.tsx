import {type ListOfTodos } from "../../types/types";
import {type ITodo } from "../../interfaces/interfaces";
import { Todo } from "../Todo/Todo";
import { type ITodo as TodoType } from "../../interfaces/interfaces";

interface Props {
  todos: ListOfTodos
  onToggleCompleteTodo ({ id, completed }: Pick<TodoType, "id" | "completed">): void
  onRemoveTodo: (id: number) => void
}

export const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompleteTodo}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo: ITodo) => (
        <li key={todo.id} 
        className={`${todo.completed ? "completed" : ""}`}
        >
          <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onRemoveTodo={onRemoveTodo}
          onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}