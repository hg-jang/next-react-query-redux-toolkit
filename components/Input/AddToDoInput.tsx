import { FunctionComponent } from "react"

interface AddTodoInputProps {

}

const AddToDoInput: FunctionComponent<AddTodoInputProps> = () => {
  return (
    <input type="text" className="mb-4 p-2" />
  )
}

export default AddToDoInput