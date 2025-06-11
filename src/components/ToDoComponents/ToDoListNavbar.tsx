import { CiSearch } from "react-icons/ci";
import { MdTask } from "react-icons/md";
interface ToDoListNavbarProps {
  setSearch: (search: string) => void;
  search: string;
}

export default function ToDoListNavbar({search, setSearch}: ToDoListNavbarProps) {
  const d = new Date();
  const year = d.getFullYear().toString();
  const month = d.toLocaleDateString("en-US", { month: "long" });
  const day = (d.getDate() < 10 ? "0" : "") + d.getDate();
  return (
    <div className="flex flex-row justify-around gap-10 pt-2 h-fit w-160 items-center">
      <div className=" flex flex-row p-3 rounded-md bg-amber-500 h-fit ">
        <input
          placeholder="Search Task"
          className="border-none focus:outline-none "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CiSearch className=" text-2xl" />
      </div>

      <div className="text-2xl font-bold text-amber-500">
        {year}, {month} {day}
      </div>
      <div>
        <MdTask className="text-3xl text-amber-500" />
      </div>
    </div>
  );
}
