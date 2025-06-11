import Navbar from "../components/Navbar";
import NoteTakingNavbar from "../components/NoteTakingNavbar";
import { useState, useRef } from "react";

export default function NoteTakingPage() {
  const [isBold, setIsBold] = useState(false);
  const noteEditorRef = useRef<HTMLDivElement>(null);

  const handleBoldClick = () => {
    setIsBold(!isBold);
    document.execCommand("bold");
  };

  return (
    <div className="h-screen flex flex-row justify-between bg-cover bg-slate-800/90 text-white">
      <Navbar />
      <div className="rounded-2xl mt-14 flex flex-col items-center gap-1">
        <NoteTakingNavbar isBold={isBold} setIsBold={handleBoldClick} /> 

        <div
          ref={noteEditorRef}
          className="w-300 h-200 rounded-2xl border-amber-500 border-1 p-1 focus:outline-none"
          contentEditable
        >
          test
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}