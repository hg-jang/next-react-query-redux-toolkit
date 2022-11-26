import { Fragment, FunctionComponent, ReactElement, ReactNode } from "react"
import { useDispatch } from "react-redux"

import { moveToDoing, moveToDone, moveToNone, removeToDo } from "../../store/reducers/toDo"

import { ToDoStatusChange } from "../../types/ToDo.type";

import ToDoHandleButton from "../../components/Button/ToDoHandleButton"

interface ToDoHandleButtonContainerProps {
  statusChange: ToDoStatusChange;
  id: number;
}

const ToDoHandleButtonContainer: FunctionComponent<ToDoHandleButtonContainerProps> = ({ statusChange, id }) => {
  const dispatch = useDispatch()

  /**
   * 진행 중 처리
   */
  const noneToToingHandler = () => {
    dispatch(moveToDoing({ id: id }))
  }

  /**
   * 완료 처리
   */
  const doingToDoneHandler = () => {
    dispatch(moveToDone({ id: id }))
  }

  /**
   * 완료 -> 진행 중
   */
  const doneToDoingHandler = () => {
    dispatch(moveToDoing({ id: id }))
  }

  /**
   * 진행 중 -> 할 일 목록
   */
  const doingToNonedHandler = () => {
    console.log('id', id);
    
    dispatch(moveToNone({ id: id }))
  }

  /**
   * 삭제 처리
   */
  const noneToRemovedHandler = () => {
    dispatch(removeToDo({ id: id }))
  }

  return (
    // <ToDoHandleButton />
    <Fragment>
      {
        {
          'NONE_TO_DOING': <ToDoHandleButton color="success" toDoHandler={noneToToingHandler} />,
          'NONE_TO_REMOVED': <ToDoHandleButton color="error" toDoHandler={noneToRemovedHandler} />,
          'DOING_TO_NONE': <ToDoHandleButton color="error" toDoHandler={doingToNonedHandler} />,
          'DOING_TO_DONE': <ToDoHandleButton color="success" toDoHandler={doingToDoneHandler} />,
          'DONE_TO_DOING': <ToDoHandleButton color="error" toDoHandler={doneToDoingHandler} />,
        }[statusChange]
      }
    </Fragment>
  )
}

export default ToDoHandleButtonContainer