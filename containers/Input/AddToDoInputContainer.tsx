import { FormEvent, KeyboardEvent, useState } from "react"
import AddToDoInput from "../../components/Input/AddToDoInput"

const AddToDoInputContainer = () => {
  const [newToDo, setNewToDo] = useState('')
  
  function onChangeAddToDoInput(e: FormEvent<HTMLInputElement>) {
    setNewToDo(e.currentTarget.value)
  }

  function onKeyUpEnter(e: KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
      const toDo = newToDo;

      // dispatch

      setNewToDo('')
    }
  }

  return (
    <AddToDoInput newToDo={newToDo} onChangeAddToDoInput={onChangeAddToDoInput} onKeyUpEnter={onKeyUpEnter} />
  )
}

export default AddToDoInputContainer