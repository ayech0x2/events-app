import { sql } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password, name } = await request.json();
  const user =
    await sql`SELECT * FROM users WHERE email = ${email.toLowerCase()}`;
  if (user.length > 0) {
    return Response.json(
      { message: "Un utilisateur avec cet email existe déjà" },
      { status: 400 },
    );
  }
  const hashed = await bcrypt.hash(password, 10);
  await sql`INSERT INTO users (email, password, name) VALUES (${email.toLowerCase()}, ${hashed}, ${name})`;
  return Response.json({ message: "Utilisateur créé" });
}
