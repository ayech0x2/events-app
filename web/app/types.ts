interface CreateEventInput {
  title: string;
  description: string;
  date: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

export type { Event, CreateEventInput };
