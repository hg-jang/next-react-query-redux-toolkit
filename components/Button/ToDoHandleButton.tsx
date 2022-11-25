import { Fragment, FunctionComponent } from "react"
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check'

import { ToDoStatus } from "../../types/ToDo.type"

interface ToDoHandleButtonProps {
  status: ToDoStatus;
}

const ToDoHandleButton: FunctionComponent<ToDoHandleButtonProps> = ({ status }) => {
  return (
    <Fragment>
      {status === ToDoStatus.DOING
        ? <IconButton color="success">
            <CheckIcon />
          </IconButton>
        : <IconButton color="error">
            <ClearIcon />
          </IconButton>
      }
    </Fragment>
  )
}

export default ToDoHandleButton