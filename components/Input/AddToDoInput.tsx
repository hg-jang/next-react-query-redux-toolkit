import { ChangeEventHandler, FormEvent, FunctionComponent, KeyboardEventHandler } from "react"

interface AddTodoInputProps {
  newToDo: string;
  onChangeAddToDoInput: ChangeEventHandler<HTMLInputElement>;
  onKeyUpEnter: KeyboardEventHandler<HTMLInputElement>;
}

const AddToDoInput: FunctionComponent<AddTodoInputProps> = ({ newToDo, onChangeAddToDoInput, onKeyUpEnter }) => {
  return (
    <input type="text" className="mb-4 p-2"
      value={newToDo} onChange={onChangeAddToDoInput} onKeyUp={onKeyUpEnter}
    />
  )
}

export default AddToDoInput