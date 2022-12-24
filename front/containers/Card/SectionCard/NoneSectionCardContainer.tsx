import { DragEvent } from "react"
import { useDispatch } from "react-redux"

import { moveToNone } from "../../../store/reducers/toDo"
import { ToDoStatus } from "../../../types/ToDo.type"

import SectionCard from "../../../components/Card/SectionCard"

const NoneSectionCardContainer = () => {

  const dispatch = useDispatch()

  const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    // console.log('dragging over NONE SECTION!!!!');
  }

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    const droppedToDoId = e.dataTransfer.getData("toDoId")
    
    dispatch(moveToNone({ id: Number(droppedToDoId) }))
  }

  return (
    <SectionCard
      sectionName="해야 할 일" useButton={true}
      status={ToDoStatus.NONE}
      onDragOverHandler={onDragOverHandler}
      onDropHandler={onDropHandler}
    />
  )
}

export default NoneSectionCardContainer