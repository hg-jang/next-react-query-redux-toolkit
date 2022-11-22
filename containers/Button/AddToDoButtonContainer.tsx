import { FunctionComponent } from "react";
import AddToDoButton from "../../components/Button/AddToDoButton"

interface AddToDoButtonContainerProps {
  isAdding: boolean;
  setIsAdding: any;
}

const AddToDoButtonContainer: FunctionComponent<AddToDoButtonContainerProps> = ({ isAdding, setIsAdding }) => {
  return (
    <AddToDoButton isAdding={isAdding} setIsAdding={setIsAdding} />
  )
}

export default AddToDoButtonContainer