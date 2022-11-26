import { Fragment, FunctionComponent } from "react";
import ToDoHandleButtonContainer from "../../containers/Button/ToDoHandleButtonContainer";

import { ToDo, ToDoStatus, ToDoStatusChange } from "../../types/ToDo.type";

import ToDoHandleButton from "../Button/ToDoHandleButton";

interface ToDoCardProps {
  toDo: ToDo
}

const ToDoCard: FunctionComponent<ToDoCardProps> = ({ toDo }) => {
  
  return (
    <div className="flex justify-between items-center mb-4 p-4 bg-white opacity-50 rounded-xl cursor-pointer hover:opacity-75">
      {toDo.toDo}
      <div>
        {toDo.status === ToDoStatus.NONE
          ? <Fragment>
              <ToDoHandleButtonContainer statusChange={ToDoStatusChange.NONE_TO_DOING} id={toDo.id} />
              <ToDoHandleButtonContainer statusChange={ToDoStatusChange.NONE_TO_REMOVED} id={toDo.id} />
            </Fragment>
          : toDo.status === ToDoStatus.DOING
            ? <Fragment>
                <ToDoHandleButtonContainer statusChange={ToDoStatusChange.DOING_TO_DONE} id={toDo.id} />
                <ToDoHandleButtonContainer statusChange={ToDoStatusChange.DOING_TO_NONE} id={toDo.id} />
              </Fragment>
            : <Fragment>
                <ToDoHandleButtonContainer statusChange={ToDoStatusChange.DONE_TO_DOING} id={toDo.id} />
              </Fragment>
        }
      </div>
    </div>
  )
}

export default ToDoCard