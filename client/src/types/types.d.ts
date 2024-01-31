import { ITodo } from "../interfaces/interfaces";

export type ListOfTodos = Todo[];

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];

export type TodoTitle = Pick<ITodo, "title">
