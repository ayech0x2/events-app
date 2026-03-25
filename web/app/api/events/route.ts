import { sql } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  /**
   * Since the work is simple, I won't be using
   * any ORM for now.
   *
   */
  if (!body.title || !body.description || !body.date) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }

  await sql`INSERT INTO events (title, description, date) VALUES (${body.title}, ${body.description}, ${body.date})`;
  return Response.json({ message: "Event created" });
}

export async function GET() {
  const events = await sql`SELECT * FROM events ORDER BY id DESC`;
  return Response.json(events);
}
