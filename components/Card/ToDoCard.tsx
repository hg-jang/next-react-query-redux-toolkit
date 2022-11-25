import { FunctionComponent } from "react";

import { ToDo, ToDoStatus } from "../../types/ToDo.type";

import ToDoHandleButton from "../Button/ToDoHandleButton";

interface ToDoCardProps {
  toDo: ToDo
}

const ToDoCard: FunctionComponent<ToDoCardProps> = ({ toDo }) => {
  return (
    <div className="flex justify-between items-center mb-4 p-4 bg-white opacity-50 rounded-xl cursor-pointer hover:opacity-75">
      {toDo.toDo}
      <div>
        <ToDoHandleButton status={ToDoStatus.DOING} />
        <ToDoHandleButton status={ToDoStatus.NONE} />
      </div>
    </div>
  )
}

export default ToDoCard