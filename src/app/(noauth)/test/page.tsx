"use client";
import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/users`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const transcribe = async () => {
  try {
    const response = await fetch("/api/transcribe", {
      method: "POST",
      body: JSON.stringify({
        url: file,
      }),
    });
    const received = await response.json();
    const data = JSON.parse(received);
    const transcription =
      data.results.channels[0].alternatives[0].paragraphs.transcript;
    setTranscription(transcription);
  } catch (error) {
    console.error(error);
  }
};

export default async function Page() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    setLines(transcription.split("."));
  }, [transcription]);

  const data = await getData();
  console.log(data);
  const [file, setFile] = useState(" ");

  return (
    <>
      {transcription && (
        <div className={styles.transcript} id="new-transcription">
          {lines.map((line, index) => {
            if (line.startsWith("Speaker 0:")) {
              return <p key={index}>{line}</p>;
            } else {
              return <p key={index}>{line}</p>;
            }
          })}
        </div>
      )}
      <form>
        <label htmlFor="audio-file">Link to Audio </label>
        <input
          onChange={(e) => setFile(e.target.value)}
          type="text"
          id="audio-file"
          name="audio-file"
          required
        />
        <button type="button" onClick={transcribe} className={styles.button}>
          Transcribe
        </button>
      </form>
    </>
  );
}
