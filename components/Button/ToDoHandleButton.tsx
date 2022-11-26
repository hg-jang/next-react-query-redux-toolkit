import { Fragment, FunctionComponent } from "react"

import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import CheckIcon from '@mui/icons-material/Check'

interface ToDoHandleButtonProps {
  color: "success" | "error";
  toDoHandler: any;
}

const ToDoHandleButton: FunctionComponent<ToDoHandleButtonProps> = ({ color, toDoHandler }) => {

  return (
    <Fragment>
      {color === 'success'
        ? <IconButton color={color} onClick={toDoHandler}>
            <CheckIcon />
          </IconButton>
        : <IconButton color={color} onClick={toDoHandler}>
            <ClearIcon />
          </IconButton>
      }
    </Fragment>
  )
}

export default ToDoHandleButton