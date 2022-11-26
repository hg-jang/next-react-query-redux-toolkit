import { FormEvent, KeyboardEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { RootState } from "../../store/store"
import { addToDo } from "../../store/reducers/toDo"

import AddToDoInput from "../../components/Input/AddToDoInput"
import { ToDo, ToDoStatus } from "../../types/ToDo.type"

const AddToDoInputContainer = () => {
  const { toDos } = useSelector((state: RootState) => state.toDo)
  const dispatch = useDispatch()

  const [toDo, setToDo] = useState('')
  
  const onChangeAddToDoInput = (e: FormEvent<HTMLInputElement>) => {
    setToDo(e.currentTarget.value)
  }

  const addToDoHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if(!toDo) return ;
    
    if(e.key === 'Enter') {
      const ids = toDos.map(t => t.id)
      const maxId = ids.length === 0 ? 1 : Math.max(...ids)
      
      const newTodo: ToDo = {
        id: maxId + 1,
        toDo: toDo,
        status: ToDoStatus.NONE,
      }

      dispatch(addToDo(newTodo))

      setToDo('')
    }
  }

  return (
    <AddToDoInput newToDo={toDo} onChangeAddToDoInput={onChangeAddToDoInput} onKeyUpEnter={addToDoHandler} />
  )
}

export default AddToDoInputContainer