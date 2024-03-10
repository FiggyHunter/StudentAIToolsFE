"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { jwtDecode } from "jwt-decode";
import { AddFile } from "@/apiHandlers/pdf";
import { getSummaries } from "@/apiHandlers/summaries";

export default function Home() {
  const router = useRouter();
  const jwt = localStorage.getItem("jwtToken") || "some.token";
  const token = jwt === "some.token" ? null : jwtDecode(jwt);
  const [pdf, setPdf] = useState("");
  const handleImageChange = (e) => {
    setPdf(e.target.files[0]);
  };
  const [summaries, setSummaries] = useState();

  useEffect(() => {
    if (jwt === "some.token" || !token) {
      router.push("/login");
    }
  }, [token?.decodedToken]);

  useEffect(() => {
    getSummaries(setSummaries);
  }, []);

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        {summaries?.map((summary, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 p-4 rounded-xl bg-primaryShade1"
          >
            <h3 className="text-white">{summary.title}</h3>
            <p className="text-text">{summary.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
