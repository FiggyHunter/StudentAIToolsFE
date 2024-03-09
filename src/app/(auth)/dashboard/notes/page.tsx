"use client";

import { useEffect, useState } from "react";
import Note from "./components/Note";
import { fetchAllNotes } from "@/apiHandlers/notes";

// Fetch arr notes
// store u state
//

export default function Page() {
  const [notes, setNotes] = useState();

  console.log(notes);

  useEffect(() => {
    fetchAllNotes(setNotes);
  }, []);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl text-white">Notes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {notes?.map((note, index) => (
          <Note id={note.-id} title={note.title} text={note.text} key={index} />
        ))}
      </div>
    </div>
  );
}
