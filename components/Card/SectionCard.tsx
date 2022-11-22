import { Fragment, FunctionComponent, useState } from "react";

import AddToDoButtonContainer from "../../containers/Button/AddToDoButtonContainer";
import AddToDoInputContainer from "../../containers/Input/AddToDoInputContainer";
import { ToDo, ToDoStatus } from "../../types/ToDo.type";
import ToDoCard from "./ToDoCard";

interface SectionCardProps {
  sectionName: string;
  useButton: boolean;
  status: ToDoStatus;
}

const SectionCard: FunctionComponent<SectionCardProps> = ({ sectionName, useButton, status }) => {
  const [isAdding, setIsAdding] = useState(false)

  const TEMP_todos: Array<ToDo> = [
    {
      id: 1,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 2,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 3,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 4,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 5,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 6,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    },
    {
      id: 7,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 8,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 9,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 10,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 11,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 12,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 13,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 14,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 15,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 16,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 17,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 18,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 18,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 19,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 20,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 21,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 22,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 23,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 24,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 25,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 26,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    },
  ]

  return (
    <div className="flex flex-col w-full h-full p-4 bg-sky-400 rounded-2xl">
      <h1 className="w-full h-fit bg-white rounded-xl text-center leading-12">
        { sectionName }
      </h1>
      <hr className="my-4 border-solid border" />
      {useButton
        ? <Fragment>
            {isAdding && <AddToDoInputContainer />}
            <AddToDoButtonContainer isAdding={isAdding} setIsAdding={setIsAdding} />
            <div className="h-full max-h-full mt-4 overflow-auto">
              {TEMP_todos.map(toDo => {
                return toDo.status === status && <ToDoCard key={toDo.id} toDo={toDo} />
              })}
            </div>
          </Fragment>
        : <Fragment>
            <div className="h-full max-h-full overflow-auto">
              {TEMP_todos.map(toDo => {
                return toDo.status === status && <ToDoCard key={toDo.id} toDo={toDo} />
              })}
            </div>
          </Fragment>
      }
    </div>
  )
}

export default SectionCard