import { Fragment, FunctionComponent, useState } from "react"
import { useSelector } from "react-redux"

import { RootState } from "../../store/store"

import { ToDoStatus } from "../../types/ToDo.type"

import AddToDoButtonContainer from "../../containers/Button/AddToDoButtonContainer"
import AddToDoInputContainer from "../../containers/Input/AddToDoInputContainer"
import ToDoCard from "./ToDoCard";

interface SectionCardProps {
  sectionName: string;
  useButton: boolean;
  status: ToDoStatus;
  onDragOverHandler: any;
  onDropHandler: any;
}

const SectionCard: FunctionComponent<SectionCardProps> = ({ sectionName, useButton, status, onDragOverHandler, onDropHandler }) => {
  const { toDos } = useSelector((state: RootState) => state.toDo)
  const [isAdding, setIsAdding] = useState(false)

  return (
    <div className="flex flex-col w-full h-full p-4 bg-sky-400 rounded-2xl">
      <h1 className="w-full bg-white rounded-xl text-center leading-12">
        { sectionName }
      </h1>
      <hr className="my-4 border-solid border" />
      {useButton
        ? <Fragment>
            {isAdding && <AddToDoInputContainer />}
            <AddToDoButtonContainer isAdding={isAdding} setIsAdding={setIsAdding} />
            <div className="hidden-scrollbar h-full mt-4 overflow-auto"
              onDragOver={onDragOverHandler} onDrop={onDropHandler}
            >
              {toDos.map(toDo => {
                return toDo.status === status && <ToDoCard key={toDo.id} toDo={toDo} />
              })}
            </div>
          </Fragment>
        : <Fragment>
            <div className="hidden-scrollbar h-full overflow-auto"
              onDragOver={onDragOverHandler} onDrop={onDropHandler}
            >
              {toDos.map(toDo => {
                return toDo.status === status && <ToDoCard key={toDo.id} toDo={toDo} />
              })}
            </div>
          </Fragment>
      }
    </div>
  )
}

export default SectionCard