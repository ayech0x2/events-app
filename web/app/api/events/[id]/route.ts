import { sql } from "@/lib/db";
import { NextRequest } from "next/server";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { params } = context;
  const { id } = await params;
  await sql`DELETE FROM events WHERE id = ${id}`;
  return Response.json({ message: "Event deleted" });
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { params } = context;
  const { id } = await params;
  const event = await sql`SELECT 
  events.*,
  COALESCE(
    json_agg(
      json_build_object(
        'id', registrations.id,
        'user', json_build_object(
          'id', users.id,
          'name', users.name,
          'email', users.email
        )
      )
    ) FILTER (WHERE registrations.id IS NOT NULL),
    '[]'
  ) AS registrations
  FROM events
  LEFT JOIN registrations 
    ON registrations.event_id = events.id
  LEFT JOIN users 
    ON users.id = registrations.user_id
  WHERE events.id = ${id}
  GROUP BY events.id
  ORDER BY events.id DESC;`;
  return Response.json({ event: event[0] });
}
