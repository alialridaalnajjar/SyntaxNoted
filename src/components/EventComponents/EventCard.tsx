import type { EventCardType } from "../../types/NoteCardType";

export default function EventCard({
  title,
  description,
  date,
  link,
  img,
}: EventCardType) {
  return (
    <>
      <div>
        <div>{title}</div> <div>{description}</div> <div>{date}</div>{" "}
        <div>{link}</div>
        <div>{img}</div>
      </div>
    </>
  );
}
