"use client";
import React from "react";
import EventService from "../services/event";
import { Event } from "../types";
import { useDate } from "../hooks/useDate";
import { useRouter } from "next/navigation";

export default function EventsTable() {
  const { formatDate } = useDate();
  const router = useRouter();

  const service = new EventService();

  const [events, setEvents] = React.useState<Array<Event>>([]);

  React.useEffect(() => {
    service.getAll().then((data) => setEvents(data));
  }, []);

  const handleDelete = (id: number) => {
    service.deleteOne(id).then(() => {
      setEvents(events.filter((event) => event.id !== id));
    });
  };

  const handleSee = (id: number) => {
    router.push(`/events/${id}`);
  };

  if (events.length === 0) {
    return <p>Aucun événement trouvé</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2 text-sm font-semibold text-gray-600">
              Nom de l'événement
            </th>
            <th className="text-left px-4 py-2 text-sm font-semibold text-gray-600">
              Description
            </th>
            <th className="text-left px-4 py-2 text-sm font-semibold text-gray-600">
              Date de début
            </th>
            <th className="text-left px-4 py-2 text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-700">{event.title}</td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {event.description}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {formatDate(event.date)}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 flex gap-2">
                <button
                  onClick={() => handleSee(event.id)}
                  className="text-blue-500  rounded cursor-pointer"
                >
                  Consulter
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="text-red-500 px-4 py-2 rounded cursor-pointer"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
