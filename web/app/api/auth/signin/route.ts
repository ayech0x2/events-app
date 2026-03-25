import { sql } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  const user =
    await sql`SELECT * FROM users WHERE email = ${email.toLowerCase()}`;

  if (!user.length) {
    return Response.json(
      { message: "Email ou mot de passe incorrect" },
      { status: 401 },
    );
  }

  const isValid = await bcrypt.compare(password, user[0].password);

  if (!isValid) {
    return Response.json(
      { message: "Email ou mot de passe incorrect" },
      { status: 401 },
    );
  }

  const token = jwt.sign({ userId: user[0].id }, "secret", { expiresIn: "1d" });

  return Response.json({
    message: "Utilisateur connecté",
    user: {
      id: user[0].id,
      email: user[0].email,
      name: user[0].name,
    },
    token,
  });
}
