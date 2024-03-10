"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { jwtDecode } from "jwt-decode";
import { AddFile } from "@/apiHandlers/pdf";
import { getSummaries } from "@/apiHandlers/summaries";
import { fetchAllNotes } from "@/apiHandlers/notes";
import { summarizeMix } from "@/apiHandlers/openai";
import { SummarizedText } from "../icons";

export default function Home() {
  const router = useRouter();
  const jwt = localStorage.getItem("jwtToken") || "some.token";
  const token = jwt === "some.token" ? null : jwtDecode(jwt);
  const [notes, setNotes] = useState([]);
  const [summaries, setSummaries] = useState([]);

  const [selectedNote, setSelectedNotes] = useState(null);
  const [selectedSummary, setSelectedSummary] = useState(null);

  const [isNotesShowed, setIsNotesShowed] = useState(null);
  const [isSummarizeShowed, setIsSummarizeShowed] = useState(null);
  const [generatedSummary, setGeneratedSummary] = useState("");

  console.log(selectedNote);
  console.log(selectedSummary);
  console.log(generatedSummary);

  useEffect(() => {
    if (jwt === "some.token" || !token) {
      router.push("/login");
    }
  }, [token?.decodedToken]);

  useEffect(() => {
    fetchAllNotes(setNotes);
    getSummaries(setSummaries);
  }, []);

  return (
    <div className="w-full flex flex-col gap-10">
      <h1 className="text-white sm:text-center md:text-left font-bold mb-4 text-3xl">
        SummaPlus
      </h1>

      <div className="flex flex-col gap-4">
        <span className="text-text max-w-[400px]">
          {selectedNote === null
            ? "First you need to chose note"
            : "Your choosen note"}
        </span>
        <div
          onClick={() => setIsNotesShowed(true)}
          className={`button secondary w-fit ${
            selectedNote === null ? "flex" : "hidden"
          }`}
        >
          Choose Note
        </div>
        <div
          className={`${
            selectedNote !== null ? "flex flex-col gap-3" : "hidden"
          }`}
        >
          <p className="text-3xl font-bold text-white">{selectedNote?.title}</p>
          <span
            onClick={() => setSelectedNotes(null)}
            className="text-xs text-teal-400 cursor-pointer"
          >
            Remove This Note
          </span>
        </div>
      </div>

      <div className="max-w-[400px] h-[1px] bg-white/10"></div>

      <div className="flex flex-col gap-4">
        <span className="text-text max-w-[400px]">
          {selectedSummary === null
            ? "Second you need to chose Summary"
            : "Your choosen Summarize"}
        </span>
        <div
          onClick={() => setIsSummarizeShowed(true)}
          className={`button secondary w-fit ${
            selectedSummary === null ? "flex" : "hidden"
          }`}
        >
          Choose Summarize
        </div>
        <div
          className={`${
            selectedSummary !== null ? "flex flex-col gap-3" : "hidden"
          }`}
        >
          <p className="text-3xl font-bold text-white">
            {selectedSummary?.title}
          </p>
          <span
            onClick={() => setSelectedSummary(null)}
            className="text-xs text-teal-400 cursor-pointer"
          >
            Remove This Summarize
          </span>
        </div>
      </div>

      <div className="max-w-[400px] h-[1px] bg-white/10"></div>
      <button
        onClick={() => {
          summarizeMix(
            { text: selectedNote.text, title: selectedNote.title },
            { text: selectedSummary.text, title: selectedSummary.title },
            setGeneratedSummary
          );
        }}
        className="button primary w-fit"
      >
        GENERATE SUMMARIZE PLUS
      </button>

      <div className="flex flex-col gap-3">
        <h2 className="text-white sm:text-center md:text-left font-bold mb-4 text-2xl">
          Your summarized plus text
        </h2>
        <div className="bg-primaryShade1 border border-solid border-primaryTint2 text-text text-base p-4 rounded-lg">
          {generatedSummary === ""
            ? "Waiting for your text to be sumarized"
            : generatedSummary}
        </div>
      </div>

      <div
        className={`w-full h-full min-h-[100vh] overflow-auto fixed left-0 top-0 backdrop-blur-xl z-[100] bg-primaryShade3/90 p-5 sm:p-10 box-border ${
          isNotesShowed ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-white sm:text-center md:text-left font-bold mb-4 text-3xl">
            Choose Note
          </h1>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => setIsNotesShowed(!isNotesShowed)}
          >
            <path
              d="M23.8072 1.19507L1.52148 23.4808"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.52148 1.19507L23.8072 23.4808"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {notes?.map((note) => (
            <div
              onClick={() => setSelectedNotes(note)}
              className={`aspect-square transition p-4 flex flex-col gap-4 w-full rounded-2xl box-border no-underline cursor-pointer ${
                note && note?._id === selectedNote?._id
                  ? "bg-[#bdb976] outline outline-2 outline-white"
                  : "bg-[#F7F18E] hover:bg-[#d5cf7b]"
              }`}
            >
              <div className="flex gap-2 justify-between items-center">
                <p className="text-extrabold text-xl text-[#82362D]">
                  {note?.title}
                </p>
              </div>
              <p className="text-medium text-base text-[#82362D] text-wrap w-full line-clamp-2">
                {note?.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`w-full h-full min-h-[100vh] overflow-auto fixed left-0 top-0 backdrop-blur-xl z-[100] bg-primaryShade3/90 p-5 sm:p-10 box-border ${
          isSummarizeShowed ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-white sm:text-center md:text-left font-bold mb-4 text-3xl">
            Choose Summarize
          </h1>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => setIsSummarizeShowed(!isSummarizeShowed)}
          >
            <path
              d="M23.8072 1.19507L1.52148 23.4808"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.52148 1.19507L23.8072 23.4808"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="gap-6 flex flex-col w-full">
          {summaries?.map((summary) => (
            <div
              onClick={() => setSelectedSummary(summary)}
              className={`flex flex-col gap-3 p-4 rounded-xl  cursor-pointer outline outline-2 ${
                summary && summary?._id === selectedSummary?._id
                  ? "bg-primaryShade1 outline-white"
                  : "bg-primaryTint1 hover:bg-primaryTint2 outline-none"
              }`}
            >
              <div className="flex gap-2 justify-between items-center">
                <p className="text-extrabold text-xl text-white">
                  {summary?.title}
                </p>
              </div>
              <p className="text-medium text-base text-text text-wrap w-full line-clamp-2">
                {summary?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
