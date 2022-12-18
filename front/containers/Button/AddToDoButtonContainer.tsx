import { Dispatch, FunctionComponent, SetStateAction } from "react";
import AddToDoButton from "../../components/Button/AddToDoButton"

interface AddToDoButtonContainerProps {
  isAdding: boolean;
  setIsAdding: Dispatch<SetStateAction<boolean>>;
}

const AddToDoButtonContainer: FunctionComponent<AddToDoButtonContainerProps> = ({ isAdding, setIsAdding }) => {

  const addToDo = () => {
    setIsAdding(!isAdding)
  }

  return (
    <AddToDoButton
      isAdding={isAdding}
      addToDo={addToDo}
    />
  )
}

export default AddToDoButtonContainer