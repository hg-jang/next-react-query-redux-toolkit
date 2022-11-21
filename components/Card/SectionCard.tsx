import { FunctionComponent } from "react";
import AddToDoButton from "../Button/AddToDoButton";

interface SectionCardProps {
  sectionName: string;
  useButton: boolean;
}

const SectionCard: FunctionComponent<SectionCardProps> = ({ sectionName, useButton }) => {
  return (
    <div className="flex flex-col w-full h-full p-4 bg-sky-400 rounded-2xl">
      <h1 className="w-full h-fit bg-white rounded-xl text-center leading-12">
        { sectionName }
      </h1>
      <hr className="my-4 border-solid border" />
      {useButton && <AddToDoButton />}
    </div>
  )
}

export default SectionCard