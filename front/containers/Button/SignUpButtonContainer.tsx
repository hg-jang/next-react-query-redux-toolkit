import { Fragment, useState } from "react";

import DefaultBlueButton from "../../components/Button/DefaultBlueButton"
import SignUpDialogContainer from "../Dialog/SignUpDialogContainer";

const SignUpButtonContainer = () => {
  const [open, setOpen] = useState(false);

  const openSignUpDialog = () => {
    setOpen(true)
  }

  return (
    <Fragment>
      <DefaultBlueButton text="회원가입" onClickHandler={openSignUpDialog} />
      <SignUpDialogContainer open={open} setOpen={setOpen} />
    </Fragment>
  )
}

export default SignUpButtonContainer