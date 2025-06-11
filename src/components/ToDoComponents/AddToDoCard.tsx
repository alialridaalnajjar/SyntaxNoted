import { useState } from "react";
import { BiSolidBookContent } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineTitle } from "react-icons/md";
interface AddToDoCardProps {
  addTask: (title: string, content: string) => void;
}

export default function AddToDoCard({ addTask }: AddToDoCardProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [added, setAdded] = useState(false);

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      addTask(title, content);
      setTitle("");
      setContent("");
      setAdded(true);
      setTimeout(() => setAdded(false), 1200);
    }
  };

  return (
    <div className="w-170 caret-transparent">
      <div
        className={`flex flex-row justify-between items-center px-7 p-3 rounded-xl bg-amber-500 h-fit shadow-lg transition-all duration-300 ${
          added ? "ring-4 ring-green-400 scale-105" : ""
        }`}
      >
        <div className="w-fit h-fit flex flex-row gap-2 items-center">
          <input
            placeholder="Task Title..."
            className="caret-white border-none rounded-2xl p-2 focus:outline-none bg-slate-900 text-white transition-colors duration-200 focus:bg-amber-100/30"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <MdOutlineTitle className="text-2xl text-slate-900 bg-amber-200 rounded-full p-1 shadow hover:bg-amber-300 transition-colors duration-200" />
        </div>
        <div className="w-fit h-fit flex flex-row gap-2 items-center">
          <input
            placeholder="Content..."
            className=" caret-white border-none rounded-2xl p-2 focus:outline-none bg-slate-900 text-white transition-colors duration-200 focus:bg-amber-100/30"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <BiSolidBookContent className="text-2xl text-slate-900 bg-amber-200 rounded-full p-1 shadow hover:bg-amber-300 transition-colors duration-200" />
        </div>
        <button
          className={`flex flex-col items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-150 group ${
            !title.trim() || !content.trim()
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={handleAddNote}
          disabled={!title.trim() || !content.trim()}
          title="Add Task"
        >
          <IoIosAddCircle className="text-3xl text-slate-900 group-hover:text-green-600 transition-colors duration-200" />
          <span className="text-md font-semibold text-slate-900 group-hover:text-green-600 transition-colors duration-200">
            Add
          </span>
        </button>
        <CiBookmark className="text-2xl text-slate-900 hover:text-amber-700 transition-colors duration-200" />
      </div>
      {added && 
        <div className="mt-2 text-green-500 text-center font-semibold animate-bounce">
          Task Added!
        </div>
      }
    </div>
  );
}
