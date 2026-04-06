import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

interface Props {
  isShowing: boolean;
}

export default function PlusIcon({ isShowing }: Props) {
  return (isShowing ? <AiOutlineMinusCircle /> : <AiOutlinePlus />)
}