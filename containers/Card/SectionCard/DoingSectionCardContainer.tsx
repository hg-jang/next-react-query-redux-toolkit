import { DragEvent } from "react"
import { useDispatch } from "react-redux"

import { moveToDoing } from "../../../store/reducers/toDo"

import { ToDoStatus } from "../../../types/ToDo.type"

import SectionCard from "../../../components/Card/SectionCard"

const DoingSectionCardContainer = () => {
  
  const dispatch = useDispatch()

  const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    // console.log('dragging over DOING SECTION!!!!');
  }

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    const droppedToDoId = e.dataTransfer.getData("toDoId")
    const status = e.dataTransfer.getData("status")
    
    dispatch(moveToDoing({ id: Number(droppedToDoId) }))
    // if(status === ToDoStatus.NONE) return dispatch()
    // if(status === ToDoStatus.DOING) return
    // if(status === ToDoStatus.DONE)
  }

  return (
    <SectionCard
      sectionName="진행 중" useButton={false}
      status={ToDoStatus.DOING}
      onDragOverHandler={onDragOverHandler}
      onDropHandler={onDropHandler}
    />
  )
}

export default DoingSectionCardContainer