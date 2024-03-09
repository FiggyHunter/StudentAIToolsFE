"use client";

import { getAllUsers } from "@/apiHandlers/user";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState();
  async function fetchUsers() {
    return await getAllUsers();
  }

  useEffect(() => {
    fetchUsers().then((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-500"></main>
  );
}
