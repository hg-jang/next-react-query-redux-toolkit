import { FormEvent, KeyboardEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

import { RootState } from "../../store/store"
import { addToDo } from "../../store/reducers/toDo"

import AddToDoInput from "../../components/Input/AddToDoInput"

const AddToDoInputContainer = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state: RootState) => state.toDo)

  const [toDo, setToDo] = useState('')
  
  const onChangeAddToDoInput = (e: FormEvent<HTMLInputElement>) => {
    setToDo(e.currentTarget.value)
  }

  const addToDoHandler = async (e: KeyboardEvent<HTMLInputElement>) => {    
    if(e.key === 'Enter') {
      if(!user) {
        return alert('로그인 해주세요~')
      }
      if(!toDo) return
      
      const url = '/back/api/to-do/new'
      const params = {
        userId: user.id,
        toDo: toDo,
      }
      const res = await axios.post(url, params)
      if(res.data) {
        const { success, toDo, message } = res.data
        if(success) {
          dispatch(addToDo(toDo))
        } else {
          alert(message)
        }
        setToDo('')
      }
    //   const ids = toDos.map(t => t.id)
    //   const maxId = ids.length === 0 ? 0 : Math.max(...ids)
      
    //   const newTodo: ToDo = {
    //     id: maxId + 1,
    //     toDo: toDo,
    //     status: ToDoStatus.NONE,
    //   }
  
    //   dispatch(addToDo(newTodo))

    }
  }

  return (
    <AddToDoInput newToDo={toDo} onChangeAddToDoInput={onChangeAddToDoInput} onKeyUpEnter={addToDoHandler} />
  )
}

export default AddToDoInputContainer