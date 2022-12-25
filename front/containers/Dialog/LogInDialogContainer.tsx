import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import axios from "axios";

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
    mutate()
  }

  const { isLoading, mutate } = useMutation('logIn', async () => {
    return axios.post<LogInReq>('/back/api/auth', {
      email, password
    })
  }, {
    onSuccess: (res) => {
      dispatch(logIn(res.data.user))
    },
    onError: (err) => {
      console.log(err)
    }
  })

  return (
    <LogInDialog
      isLoading={isLoading} open={open} handleClose={handleClose} handleLogIn={logInHandler}
      onChangeEmail={onChangeEmail} onChangePassword={onChangePassword}
    />
  )
}

export default LogInDialogContainer