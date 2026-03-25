import AsyncStorage from "@react-native-async-storage/async-storage";

export default class EventService {
  private baseUrl = process.env.EXPO_PUBLIC_API_URL + "/api/client/events";

  async getEvents() {
    const token = await AsyncStorage.getItem("token");
    const response = await fetch(this.baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }

  async register(eventId: string) {
    const token = await AsyncStorage.getItem("token");
    const response = await fetch(`${this.baseUrl}/${eventId}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
}
