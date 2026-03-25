import { Event } from "@/app/types";
import React from "react";
import { useDate } from "../hooks/useDate";

export function EventDetails({ id }: { id: string }) {
  const [event, setEvent] = React.useState<Event | null>(null);

  const [fetching, setFetching] = React.useState<boolean>(true);

  const { formatDate } = useDate();

  React.useEffect(() => {
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data.event))
      .finally(() => setFetching(false));
  }, [id]);

  if (fetching) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <DetailsRow label="Nom de l'événement" value={event?.title || ""} />
      <DetailsRow label="Description" value={event?.description || ""} />
      <DetailsRow
        label="Date de début"
        value={formatDate(event?.date || "")} // TODO: fix this
      />

      <div>
        <span className="text-gray-500">
          Inscriptions ({event?.registrations?.length}):
        </span>
        <ul className="flex flex-col gap-2">
          {event?.registrations?.map((registration) => (
            <li key={registration.id} className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{registration.user.name}</span>
              </div>
              -
              <div className="flex items-center gap-2 text-gray-500">
                <span>{registration.user.email}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const DetailsRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-500">{label}:</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
};
