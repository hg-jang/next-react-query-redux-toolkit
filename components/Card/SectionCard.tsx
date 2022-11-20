import { FunctionComponent } from "react";

interface SectionCardProps {
  sectionName: string;
  button?: JSX.Element;
}

const SectionCard: FunctionComponent<SectionCardProps> = ({ sectionName, button }) => {
  return (
    <div className="flex flex-col w-full h-full p-4 bg-sky-400 rounded-2xl">
      <h1 className="w-full h-fit bg-white rounded-xl text-center leading-12">
        { sectionName }
      </h1>
      <hr className="my-4 border-solid border" />
      { button }
    </div>
  )
}

export default SectionCard