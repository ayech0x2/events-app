"use client";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();
  return (
    <span
      className="container mx-auto cursor-pointer text-blue-500"
      onClick={() => router.back()}
    >
      Retour
    </span>
  );
}
