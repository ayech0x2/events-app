"use client";
import { EventDetails } from "@/app/components/EventDetails";
import PageWrapper from "@/app/components/PageWrapper";
import { useParams } from "next/navigation";

export default function EventPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <PageWrapper title="Consultation d'événement">
      <EventDetails id={id} />
    </PageWrapper>
  );
}
