import { MdDeleteForever, MdFavoriteBorder } from "react-icons/md";
import type { NoteCardType } from "../../types/NoteCardType";
import { useState } from "react";

export default function ToDoCard({ content, title }: NoteCardType) {
  const [show, setShow] = useState(true);
  const handleDelete = () => {
    setShow(false);
    console.log("DeletedTestttt");
  };

  return (
    <>
      {show === true ? (
        <div>
          <div className="flex flex-col justify-between bg-amber-500/80 rounded-lg shadow-lg shadow-black p-4 w-84 h-65">
            <div className="flex flex-row justify-between">
              <div className="text-xl font-bold">{title}</div>
            </div>
            <p className="text-sm text-gray-600">{content}</p>
            <div className="flex flex-row justify-between mt-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors duration-200 hover:scale-105"
                onClick={() => console.log("Edit")}
              >
                Edit
              </button>
              <div className="flex flex-row gap-6 items-center">
                <MdFavoriteBorder className="text-2xl  text-blue-500 hover:text-amber-700 transition-colors duration-200 hover:scale-110 " />
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors duration-200  hover:cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-black"
                  onClick={() => handleDelete()}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
// we used <> instead of <div >  since <> doesnt take any space when deleted as div !
