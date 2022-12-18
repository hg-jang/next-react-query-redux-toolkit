import { FunctionComponent, useState } from "react"

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'

interface SignUpDialogProps {
  open: boolean;
  handleClose: () => void;
  handleSignUp: any;
  onChangeEmail: any;
  onChangeName: any;
  onChangePassword: any;
}

const SignUpDialog: FunctionComponent<SignUpDialogProps> = ({ open, handleClose, handleSignUp, onChangeEmail, onChangeName, onChangePassword }) => {

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>회원가입</DialogTitle>
      <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="이메일"
        type="email"
        fullWidth
        variant="standard"
        onChange={onChangeEmail}
      />
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="이름"
        type="text"
        fullWidth
        variant="standard"
        onChange={onChangeName}
      />
      <TextField
        autoFocus
        margin="dense"
        id="password"
        label="비밀번호"
        type="password"
        fullWidth
        variant="standard"
        onChange={onChangePassword}
      />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleSignUp}>회원가입</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SignUpDialog