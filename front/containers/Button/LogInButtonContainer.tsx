import { Fragment, useState } from "react";

import DefaultBlueButton from "../../components/Button/DefaultBlueButton"
import LogInDialogContainer from "../Dialog/LogInDialogContainer";

const LogInButtonContainer = () => {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <DefaultBlueButton text="로그인" onClickHandler={() => setOpen(true)} />
      <LogInDialogContainer open={open} setOpen={setOpen} />
    </Fragment>
  )
}

export default LogInButtonContainer