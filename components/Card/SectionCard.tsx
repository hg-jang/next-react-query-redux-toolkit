import { FunctionComponent, useState } from "react";
import AddToDoButton from "../Button/AddToDoButton";
import AddToDoInput from "../Input/AddToDoInput";

interface SectionCardProps {
  sectionName: string;
  useButton: boolean;
}

const SectionCard: FunctionComponent<SectionCardProps> = ({ sectionName, useButton }) => {
  const [isAdding, setIsAdding] = useState(false)

  return (
    <div className="flex flex-col w-full h-full p-4 bg-sky-400 rounded-2xl">
      <h1 className="w-full h-fit bg-white rounded-xl text-center leading-12">
        { sectionName }
      </h1>
      <hr className="my-4 border-solid border" />
      {isAdding && <AddToDoInput />}
      {useButton && <AddToDoButton isAdding={isAdding} setIsAdding={setIsAdding} />}
    </div>
  )
}

export default SectionCard