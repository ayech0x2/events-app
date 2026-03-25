import { CreateEventInput, Event } from "../types";

export default class EventService {
  private baseUrl = "/api/events";

  async create(
    event: CreateEventInput,
    onSuccess: () => void = () => {},
    onError: () => void = () => {},
  ) {
    try {
      const response = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    } catch (e) {
      onError();
    }
  }

  async getAll() {
    const response = await fetch(this.baseUrl);
    return response.json() as Promise<Array<Event>>;
  }

  async deleteOne(id: number) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  }
}
