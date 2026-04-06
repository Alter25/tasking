import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";

interface Props {
  title?: string;
  content?: string;
}

export default function TaskCard({ title, content }: Props) {
  const [showConent, setShowContent] = useState(false);
  return (<article className="bg-emerald-200 w-145 rounded-2xl p-2">
    <div className="flex justify-between items-center px-4 py-2">
      <span className="text-2xl font-normal ml-2">{title}</span>
      <div onClick={() => setShowContent(!showConent)} className="p-1">
        <PlusIcon isShowing={showConent} />
      </div>
    </div>
    {
      showConent &&
      <section className="border m-2">
        <p className="text-xl">
          {content}
        </p>
      </section>
    }
  </article>)
}