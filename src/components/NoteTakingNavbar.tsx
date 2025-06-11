import {
  CiTextAlignCenter,
  CiTextAlignLeft,
  CiTextAlignRight,
} from "react-icons/ci";
import { FaItalic } from "react-icons/fa";
import { LiaBoldSolid } from "react-icons/lia";

interface BOLD {
  setIsBold: () => void; // Expecting a function that toggles bold
  isBold: boolean;       // To potentially style the button based on state
}

export default function NotTakingNavbar({ setIsBold, isBold }: BOLD) {
  return (
    <div className="flex flex-row gap-8.75 bg-amber-500 p-2 h-fit rounded-2xl px-10">
      <LiaBoldSolid
        className={`text-2xl hover:cursor-pointer hover:text-black rounded-2xl ${
          isBold ? 'text-black' : '' // Example: Make icon black when bold is active
        }`}
        onClick={setIsBold} // Correctly calling the setIsBold function
      />
      <FaItalic className="text-2xl hover:cursor-pointer hover:text-black rounded-2xl" />
      <CiTextAlignRight className="font-bold text-2xl hover:cursor-pointer hover:text-black rounded-2xl " />
      <CiTextAlignLeft className="font-bold text-2xl hover:cursor-pointer hover:text-black rounded-2xl" />
      <CiTextAlignCenter className="font-bold text-2xl hover:cursor-pointer hover:text-black " />
    </div>
  );
}