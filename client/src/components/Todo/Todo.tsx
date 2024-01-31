import { type ITodo as TodoType } from "../../interfaces/interfaces";

interface Props extends TodoType {
  onToggleCompleteTodo ({ id, completed }: Pick<TodoType, "id" | "completed">): void
  onRemoveTodo: (id: number) =>  void;
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
  
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id, 
      completed: event.target.checked
    })
  }

  return (
    <>
      <div className="view">
        <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckBox}
        />
        <label htmlFor="">
          {title}
        </label>
        <button 
        className="destroy"
        onClick={()=>{onRemoveTodo(id)}}
        />
      </div>
    </>
  )
}