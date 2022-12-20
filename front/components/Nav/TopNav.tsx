import { Fragment, FunctionComponent } from "react"

import LogInButtonContainer from "../../containers/Button/LogInButtonContainer"
import LogOutButtonContainer from "../../containers/Button/LogOutButtonContainer"
import SignUpButtonContainer from "../../containers/Button/SignUpButtonContainer"

interface TopNavProps {
  user: any
}

const TopNav: FunctionComponent<TopNavProps> = ({ user }) => {
  return (
    <div className="flex items-center justify-end h-full w-full">
      {user
        ? <Fragment>
            <span className="mr-2">
              { user.name }
            </span>
            <LogOutButtonContainer />
          </Fragment>
        : <Fragment>
            <LogInButtonContainer />
            <SignUpButtonContainer />
          </Fragment>
      } 
    </div>
  )
}

export default TopNav