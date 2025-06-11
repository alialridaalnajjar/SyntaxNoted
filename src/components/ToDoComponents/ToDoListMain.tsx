import ToDoCard from "./ToDoCard";

import type { NoteCardType } from "../../types/NoteCardType";
interface ToDoListMainProps {
  tasks: NoteCardType[];
}
export default function ToDoListMain({ tasks }: ToDoListMainProps) {
  return (  
    <div className="w-200">
      <div> Recorded Tasks: {tasks.length}</div>
      <div className="flex flex-row gap-4 mt-4 flex-wrap">
        {tasks.map((note) => (
          <ToDoCard
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            important={note.important}
          />
        ))}
      </div>
    </div>
  );
}
