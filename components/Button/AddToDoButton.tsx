const AddToDoButton = () => {
  function addToDo() {
    console.log('clicked!!')
  }

  return (
    <button onClick={addToDo}
      className="w-full p-2 bg-white opacity-50 border-solid border-black rounded-xl hover:opacity-75"
    >
      +
    </button>
  )
}

export default AddToDoButton