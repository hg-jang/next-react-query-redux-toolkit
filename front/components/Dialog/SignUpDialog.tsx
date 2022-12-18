import { FunctionComponent, useState } from "react"

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface SignUpDialogProps {
  open: boolean;
  handleClose: () => void;
}

const SignUpDialog: FunctionComponent<SignUpDialogProps> = ({ open, handleClose }) => {

  return (
    <Dialog open={open} onClose={handleClose}>
      It's dialog
    </Dialog>
  )
}

export default SignUpDialog