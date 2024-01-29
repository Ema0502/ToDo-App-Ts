import { type ITodo as TodoType } from "../../interfaces/interfaces";

type Props  = TodoType;

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
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
        onClick={()=>{}}
        />
      </div>
    </>
  )
}