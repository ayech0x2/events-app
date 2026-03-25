import { sql } from "@/lib/db";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id: eventId } = await params;

  const token = request.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const decodedToken = jwt.verify(token, "secret") as { userId: string };

  const user = await sql`SELECT * FROM users WHERE id = ${decodedToken.userId}`;

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const event = await sql`SELECT * FROM events WHERE id = ${eventId}`;

  if (!event) {
    return Response.json({ error: "Event not found" }, { status: 404 });
  }

  const registration =
    await sql`INSERT INTO registrations (event_id, user_id) VALUES (${eventId}, ${decodedToken.userId})`;

  return Response.json(registration);
}
