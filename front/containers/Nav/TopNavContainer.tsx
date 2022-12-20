import { useSelector } from "react-redux"

import { RootState } from "../../store/store"

import TopNav from "../../components/Nav/TopNav"

const TopNavContainer = () => {
  const { user } = useSelector((state: RootState) => state.toDo)

  return (
    <TopNav user={user} />
  )
}

export default TopNavContainer