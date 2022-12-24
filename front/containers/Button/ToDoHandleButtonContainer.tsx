import { Fragment, FunctionComponent } from "react"
import { useDispatch } from "react-redux"
import axios from "axios";

import { moveToDoing, moveToDone, moveToNone, removeToDo } from "../../store/reducers/toDo"
import { ToDoStatus, ToDoStatusChange } from "../../types/ToDo.type";

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
  const noneToDoingHandler = async () => {
    const url = `/back/api/to-do/${id}`
    const params = {
      status: ToDoStatus.DOING
    }
    const res = await axios.patch(url, params)
    if(res.data) {
      const { success, message } = res.data
      if(success) {
        dispatch(moveToDoing({ id: id }))
      } else {
        alert(message)
      }
    }

  }

  /**
   * 완료 처리
   */
  const doingToDoneHandler = async () => {
    const url = `/back/api/to-do/${id}`
    const params = {
      status: ToDoStatus.DONE
    }
    const res = await axios.patch(url, params)
    if(res.data) {
      const { success, message } = res.data
      if(success) {
        dispatch(moveToDone({ id: id }))
      } else {
        alert(message)
      }
    }
  }

  /**
   * 완료 -> 진행 중
   */
  const doneToDoingHandler = async () => {
    const url = `/back/api/to-do/${id}`
    const params = {
      status: ToDoStatus.DOING
    }
    const res = await axios.patch(url, params)
    if(res.data) {
      const { success, message } = res.data
      if(success) {
        dispatch(moveToDoing({ id: id }))
      } else {
        alert(message)
      }
    }
  }

  /**
   * 진행 중 -> 할 일 목록
   */
  const doingToNonedHandler = async () => {
    const url = `/back/api/to-do/${id}`
    const params = {
      status: ToDoStatus.NONE
    }
    const res = await axios.patch(url, params)
    if(res.data) {
      const { success, message } = res.data
      if(success) {
        dispatch(moveToNone({ id: id }))
      } else {
        alert(message)
      }
    }
  }

  /**
   * 삭제 처리
   */
  const noneToRemovedHandler = async () => {
    const url = `/back/api/to-do/${id}`
    const res = await axios.delete(url)
    if(res.data) {
      const { success, message } = res.data
      if(success) {
        dispatch(removeToDo({ id: id }))
      } else {
        alert(message)
      }
    }

  }

  return (
    <Fragment>
      {
        {
          'NONE_TO_DOING': <ToDoHandleButton color="success" toDoHandler={noneToDoingHandler} />,
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