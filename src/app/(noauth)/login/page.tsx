"use client";

import useLogin from "@/hooks/useLogin";
import { useJwtStore } from "@/stores/useJWTStore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Login() {
  const {
    handleInputChange,
    handleLogin,
    loginErrors,
    loginFormData,
    setLoginErrors,
  } = useLogin();

  const { jwt, setJWT } = useJwtStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />

      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        name="email"
        value={loginFormData.email}
        onChange={(e) => handleInputChange(e)}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        name="password"
        type="password"
        value={loginFormData.password}
        onChange={(e) => handleInputChange(e)}
        placeholder="password"
      />
      <button
        onClick={() => handleLogin()}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login here
      </button>
      <Link href="/register">Visit Signup page</Link>
    </div>
  );
}
