import { RiExpandRightFill } from "react-icons/ri";
interface hidable {
  sethidden: (value: boolean) => void;
}
export default function OpenFeatured({ sethidden }: hidable) {
  return (
    <div
      className="bg-slate-800 h-8 w-8 flex flex-row justify-center items-center rounded-full m-1 cursor-pointer hover:bg-yellow-800 transition mt-2 ml-1"
      onClick={() => sethidden(false)}
    >
      <RiExpandRightFill />
    </div>
  );
}
