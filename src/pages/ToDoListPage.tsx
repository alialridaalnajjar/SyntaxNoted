import { useState } from "react";
import Navbar from "../components/Navbar";
import AddToDoCard from "../components/ToDoComponents/AddToDoCard";
import ToDoListMain from "../components/ToDoComponents/ToDoListMain";
import ToDoListNavbar from "../components/ToDoComponents/ToDoListNavbar";
import type { NoteCardType } from "../types/NoteCardType";

export default function ToDoListPage() {
  const [tasks, setTasks] = useState<NoteCardType[]>([]);
  const addTask = (title: string, content: string) => {
    setTasks(
      tasks.concat({ id: (tasks.length + 1).toString(), title, content })
    );
  };
  const [search, setSearch] = useState("");
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="">
      <div className=" flex flex-row  bg-cover bg-slate-800/90  text-white justify-between ">
        <Navbar />
        <div className="flex flex-col gap-16 pt-2">
          <ToDoListNavbar  search={search} setSearch={setSearch}/>
          <AddToDoCard addTask={addTask} />
          <ToDoListMain tasks={filteredTasks} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
