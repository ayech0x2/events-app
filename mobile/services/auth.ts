import { User } from "@/types";

export default class AuthService {
  private baseUrl = process.env.EXPO_PUBLIC_API_URL + "/api/auth";

  async signup(email: string, password: string, name: string) {
    const response = await fetch(this.baseUrl + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  }

  async signin(email: string, password: string) {
    const response = await fetch(this.baseUrl + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = (await response.json()) as {
      message: string;
      user: User;
      token: string;
    };
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  }
}
