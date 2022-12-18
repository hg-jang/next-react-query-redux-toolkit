import axios from "axios";
import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import SignUpDialog from "../../components/Dialog/SignUpDialog"

interface SignUpDialogContainerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const SignUpDialogContainer: FunctionComponent<SignUpDialogContainerProps> = ({ open, setOpen }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const signUpHandler = async () => {
    const url = '/back/api/auth/new'
    const params = {
      email, name, password
    }

    try {
      const res = await axios.post(url, params)
  
      if(res.data) {
        console.log('회원가입 성공');
      }
    } catch(e) {
      console.log('e', e)
    }
  }

  return (
    <SignUpDialog
      open={open} handleClose={handleClose} handleSignUp={signUpHandler}
      onChangeEmail={onChangeEmail} onChangeName={onChangeName} onChangePassword={onChangePassword}
    />
  )
}

export default SignUpDialogContainer