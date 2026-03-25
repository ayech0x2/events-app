"use client";
import { useRouter } from "next/navigation";
import EventsTable from "../components/EventsTable";
import PageWrapper from "../components/PageWrapper";

export default function EventsPage() {
  const router = useRouter();
  return (
    <PageWrapper
      title="Événements"
      actions={
        <button
          onClick={() => router.push("/events/create")}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Ajouter un événement
        </button>
      }
      showGoBack={false}
    >
      <EventsTable />
    </PageWrapper>
  );
}
