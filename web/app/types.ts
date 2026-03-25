interface CreateEventInput {
  title: string;
  description: string;
  date: string;
}

interface Registration {
  id: number;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  registrations: Registration[];
}

export type { Event, CreateEventInput };
