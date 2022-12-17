import { DragEvent } from "react"
import { useDispatch } from "react-redux"

import { moveToDone } from "../../../store/reducers/toDo"

import { ToDoStatus } from "../../../types/ToDo.type"

import SectionCard from "../../../components/Card/SectionCard"

const DoneSectionCardContainer = () => {

  const dispatch = useDispatch()

  const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    // console.log('dragging over DONE SECTION!!!!');
  }

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    const droppedToDoId = e.dataTransfer.getData("toDoId")

    dispatch(moveToDone({ id: Number(droppedToDoId) }))
  }

  return (
    <SectionCard
      sectionName="완료" useButton={false}
      status={ToDoStatus.DONE}
      onDragOverHandler={onDragOverHandler}
      onDropHandler={onDropHandler}
    />
  )
}

export default DoneSectionCardContainer