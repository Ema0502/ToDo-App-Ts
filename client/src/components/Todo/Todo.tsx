import { type ITodo as TodoType } from "../../interfaces/interfaces";

interface Props extends TodoType {
  onRemoveTodo: (id: number) =>  void;
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
    <>
      <div className="view">
        <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => {}}
        />
        <label htmlFor="">
          {id} - 
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