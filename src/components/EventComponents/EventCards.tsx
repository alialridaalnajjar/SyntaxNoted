import React from "react";
import type { EventCardType } from "../../types/NoteCardType";
import EventCard from "./EventCard";

export default function EventCards({
  EventCollection,
}: {
  EventCollection: EventCardType[];
}) {
  return (
    <div>
      {EventCollection.map((e) => (
        <EventCard
          img={e.img}
          date={e.date}
          description={e.description}
          title={e.title}
          link={e.link}
        />
      ))}
    </div>
  );
}
