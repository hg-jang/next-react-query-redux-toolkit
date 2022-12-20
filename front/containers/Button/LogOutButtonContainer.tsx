import { useDispatch } from "react-redux"

import { logOut } from "../../store/reducers/toDo"

import DefaultBlueButton from "../../components/Button/DefaultBlueButton"

const LogOutButtonContainer = () => {
  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(logOut())
  }

  return (
    <DefaultBlueButton text='로그아웃' onClickHandler={logOutHandler} />
  )
}

export default LogOutButtonContainer