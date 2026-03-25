export interface SignupInput {
  email: string;
  password: string;
  name: string;
}

export interface SigninInput {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  registrations_count: number;
  is_registered: boolean;
}
