import { sql } from "@/lib/db";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.headers.get("Authorization")?.split(" ")[1];

  const decodedToken = jwt.verify(token!, "secret") as {
    userId: string;
  };

  const events = await sql`SELECT 
      events.*,
      COUNT(registrations.id) AS registrations_count,
      CASE 
        WHEN EXISTS (
          SELECT 1 
          FROM registrations r 
          WHERE r.event_id = events.id AND r.user_id = ${decodedToken.userId}
        ) THEN true
        ELSE false
      END AS is_registered
    FROM events
    LEFT JOIN registrations 
      ON registrations.event_id = events.id
    GROUP BY events.id
    ORDER BY events.id DESC`;
  return Response.json(events);
}
