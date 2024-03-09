import { getAllUsers } from "@/apiHandlers/user";
import { useEffect } from "react";

export default function Home() {
  async function fetchUsers() {
    await getAllUsers();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-500"></main>
  );
}
