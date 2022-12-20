import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import LogInDialog from "../../components/Dialog/LogInDialog"
import { logIn } from "../../store/reducers/toDo";
import { LogInReq } from "../../types/Req.type";

interface LogInDialogContainerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const LogInDialogContainer: FunctionComponent<LogInDialogContainerProps> = ({ open, setOpen }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const logInHandler = async () => {
    const url = '/back/api/auth'
    const params = {
      email, password
    }

    try {
      const res = await axios.post<LogInReq>(url, params)
  
      if(res.data) {
        const { success, user, message } = res.data
        if(success) {
          dispatch(logIn(user))
          handleClose()
        } else {
          alert(message)
        }

      }
    } catch(e) {
      console.log('e', e)
    }
  }

  return (
    <LogInDialog
      open={open} handleClose={handleClose} handleLogIn={logInHandler}
      onChangeEmail={onChangeEmail} onChangePassword={onChangePassword}
    />
  )
}

export default LogInDialogContainer