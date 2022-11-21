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
      className="w-full p-2 bg-white opacity-50 border-solid border-black rounded-xl hover:opacity-75"
    >
      {!isAdding
        ? '+'
        : '-'
      }
    </button>
  )
}

export default AddToDoButton