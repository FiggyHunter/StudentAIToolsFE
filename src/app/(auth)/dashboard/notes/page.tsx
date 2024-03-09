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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      <Note id="2323" />
    </div>
  );
}
