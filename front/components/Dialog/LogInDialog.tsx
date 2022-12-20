import { FunctionComponent } from "react"

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'

interface LogInDialogProps {
  open: boolean;
  handleClose: () => void;
  handleLogIn: any;
  onChangeEmail: any;
  onChangePassword: any;
}

const LogInDialog: FunctionComponent<LogInDialogProps> = ({ open, handleClose, handleLogIn, onChangeEmail, onChangePassword }) => {

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>로그인</DialogTitle>
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
        id="password"
        label="비밀번호"
        type="password"
        fullWidth
        variant="standard"
        onChange={onChangePassword}
      />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogIn}>로그인</Button>
      </DialogActions>
    </Dialog>
  )
}

export default LogInDialog