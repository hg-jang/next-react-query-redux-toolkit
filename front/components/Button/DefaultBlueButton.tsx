import { FunctionComponent } from "react";

interface DefaultBlueButtonProps {
  text: string;
  onClickHandler: any;
}

const DefaultBlueButton: FunctionComponent<DefaultBlueButtonProps> = ({ text, onClickHandler }) => {
  return (
    <button className="
      py-2 px-4 h-fit
      border-solid border border-white rounded-md
      bg-sky-300 hover:bg-sky-400
      text-white"
      onClick={onClickHandler}
    >
      { text }
    </button>
  )
}

export default DefaultBlueButton