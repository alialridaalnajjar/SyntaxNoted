import {
  FaStickyNote,
  FaListUl,
  FaCalendarAlt,
  FaCoffee,
  FaEnvelope,
} from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-start sticky h-screen bg-slate-800 text-white w-3/4 sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-1/12 min-w-[70px] max-w-xs rounded-tr-3xl shadow-lg shadow-black p-4 caret-transparent">
      <Link to="/">
        {" "}
        <div className="mt-6 ml-2 ">
          <span className="text-white font-serif text-xl sm:text-2xl">
            Syntax{" "}
          </span>
          <span className="text-amber-400 font-serif text-xl sm:text-2xl">
            Noted
          </span>
        </div>
      </Link>
      <div className="flex flex-col justify-around mt-20 gap-6 w-full">
        <Link to="/">
          <div className="flex items-center gap-3 bg-amber-500/80 hover:bg-amber-400 transition rounded-lg px-3 py-2 cursor-pointer shadow w-full">
            <IoIosHome />
            <span className="hidden sm:inline">Home</span>
          </div>
        </Link>
        <Link to="/NoteTakingPage">
          <div className="flex items-center gap-3 bg-amber-500/80 hover:bg-amber-400 transition rounded-lg px-3 py-2 cursor-pointer shadow w-full">
            <FaStickyNote />
            <span className="hidden sm:inline">Take Some Notes</span>
          </div>
        </Link>
        <Link to="/ToDoListPage">
          <div className="flex items-center gap-3 bg-amber-500/80 hover:bg-amber-400 transition rounded-lg px-3 py-2 cursor-pointer shadow w-full">
            <FaListUl />
            <span className="hidden sm:inline">To-Do List</span>
          </div>
        </Link>
        <Link to="/EventsPage">
          <div className="flex items-center gap-3 bg-amber-500/80 hover:bg-amber-400 transition rounded-lg px-3 py-2 cursor-pointer shadow w-full">
            <FaCalendarAlt />
            <span className="hidden sm:inline">Events</span>
          </div>
        </Link>
        <div className="flex items-center gap-3 bg-amber-500/80 hover:bg-amber-400 transition rounded-lg px-3 py-2 cursor-pointer shadow w-full">
          <FaCoffee />
          <span className="hidden sm:inline">Afternoon Tea</span>
        </div>
        <Link to="/ContactPage">
          <div className="flex items-center gap-3 bg-amber-500/80 hover:bg-amber-400 transition rounded-lg px-3 py-2 cursor-pointer shadow w-full">
            <FaEnvelope />
            <span className="hidden sm:inline">Contact</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
