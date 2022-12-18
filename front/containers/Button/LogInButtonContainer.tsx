import DefaultBlueButton from "../../components/Button/DefaultBlueButton"

const LogInButtonContainer = () => {

  const logIn = () => {
    console.log('login');
  }

  return (
    <DefaultBlueButton text="로그인" onClickHandler={logIn} />
  )
}

export default LogInButtonContainer