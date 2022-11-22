import { FunctionComponent } from "react";
import { ToDo } from "../../types/ToDo.type";

interface ToDoCardProps {
  toDo: ToDo
}

const ToDoCard: FunctionComponent<ToDoCardProps> = ({ toDo }) => {
  return (
    <div className="mb-4 p-4 bg-white opacity-50 rounded-xl cursor-pointer hover:opacity-75">
      {toDo.toDo}
    </div>
  )
}

export default ToDoCard