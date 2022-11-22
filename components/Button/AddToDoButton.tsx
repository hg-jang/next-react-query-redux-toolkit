import { FunctionComponent } from "react";

interface AddToDoButtonProps {
  isAdding: boolean;
  setIsAdding: any;
}

const AddToDoButton: FunctionComponent<AddToDoButtonProps> = ({ isAdding, setIsAdding }) => {
  function addToDo() {
    setIsAdding(!isAdding)
  }

  return (
    <button onClick={addToDo}
      className="w-full p-2  border-solid border border-white rounded-xl hover:bg-white hover:opacity-75"
    >
      {!isAdding
        ? '+'
        : '-'
      }
    </button>
  )
}

export default AddToDoButton