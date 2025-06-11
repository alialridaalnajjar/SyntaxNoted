import { MdOutlineClose } from "react-icons/md";

interface hidable {
  sethidden: (value: boolean) => void;
}

export default function CloseFeatured({ sethidden }: hidable) {
  return (
    <div
      className="bg-slate-800/80 h-8 w-8 flex flex-row justify-center items-center rounded-full m-1 cursor-pointer hover:bg-yellow-800 transition"
      onClick={() => sethidden(true)}
    >
      <MdOutlineClose />
    </div>
  );
}
