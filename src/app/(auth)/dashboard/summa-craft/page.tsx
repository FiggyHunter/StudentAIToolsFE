"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { jwtDecode } from "jwt-decode";
import { AddFile } from "@/apiHandlers/pdf";

export default function Home() {
  const router = useRouter();
  const jwt = localStorage.getItem("jwtToken") || "some.token";
  const token = jwt === "some.token" ? null : jwtDecode(jwt);
  const [pdf, setPdf] = useState("");
  const handleImageChange = (e) => {
    setPdf(e.target.files[0]);
  };

  useEffect(() => {
    if (jwt === "some.token" || !token) {
      router.push("/login");
    }
  }, [token?.decodedToken]);

  return (
    <div className="w-full flex flex-col gap-10">
      <h1 className="text-white sm:text-center md:text-left font-bold mb-4 text-3xl">
        Ready to supercharge your PDF's?
      </h1>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-96 border-1 border-white/15 bg-white/5 border-dashed rounded-3xl cursor-pointer hover:bg-white/10 transition"
        >
          <div className="flex flex-col items-center justify-center p-5 gap-3">
            <svg
              className="w-10 h-10 mb-4 text-primaryTint3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="text-lg text-text text-center">
              <span className="font-medium text-lg">Click to upload</span>
              <br></br> or drag and drop
            </p>
            <p className="text-sm text-white/40 italic">PDF Only</p>
          </div>
          <input
            className="h-full w-full"
            id="dropzone-file"
            type="file"
            onChange={(e) => setPdf(e)}
            className="hidden"
          />
        </label>
      </div>
      <button onClick={() => AddFile(pdf)} className="button primary w-fit">
        Upload the PDF
      </button>
    </div>
  );
}
