import { Dispatch, FunctionComponent, SetStateAction } from "react";
import SignUpDialog from "../../components/Dialog/SignUpDialog"

interface SignUpDialogContainerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const SignUpDialogContainer: FunctionComponent<SignUpDialogContainerProps> = ({ open, setOpen }) => {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SignUpDialog open={open} handleClose={handleClose} />
  )
}

export default SignUpDialogContainer