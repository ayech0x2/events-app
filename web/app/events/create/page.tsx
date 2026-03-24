import CreateEventForm from "@/app/components/CreateEventForm";
import PageWrapper from "@/app/components/PageWrapper";

export default function CreateEventPage() {
  return (
    <PageWrapper title="Création d'un événement">
      <div className="flex flex-col gap-4 lg:w-1/2">
        <CreateEventForm />
      </div>
    </PageWrapper>
  );
}
