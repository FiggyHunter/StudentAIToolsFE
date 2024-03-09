"use client";

import { addNewNote, fetchNoteById } from "@/apiHandlers/notes";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { noteId: string } }) {
  const [note, setNote] = useState({ title: "", text: "" });
  useEffect(() => {
    fetchNoteById(params.noteId, setNote);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNote((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <label htmlFor="title"></label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(e);
        }}
        id="title"
        name="title"
        type="text"
        value={note.title}
      />
      <label htmlFor="text"></label>
      <input
        id="text"
        name="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(e);
        }}
        value={note.text}
        type="text"
      />
      <button onClick={() => addNewNote(note)}>Add a new note</button>
    </div>
  );
}
