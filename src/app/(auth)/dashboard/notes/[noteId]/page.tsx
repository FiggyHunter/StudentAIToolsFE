"use client";

import { fetchNoteById } from "@/apiHandlers/notes";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { noteId: string } }) {
  const [note, setNote] = useState();
  useEffect(() => {
    fetchNoteById(params.noteId, setNote);
  }, []);
  return (
    <section>
      <h1>{note?.title}</h1>
      <p>{note?.text}</p>
    </section>
  );
}
