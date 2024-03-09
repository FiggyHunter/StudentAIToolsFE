"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import useRegister from "@/hooks/useRegister";
import DateInputMask from "@/components/register/DateMask";

export default function Register() {
  const router = useRouter();
  const {
    handleInputChange,
    handleRegister,
    registerErrors,
    registerFormData,
    setRegisterErrors,
  } = useRegister();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">First Name</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        name="firstName"
        value={registerFormData.firstName}
        onChange={(e) => handleInputChange(e)}
        placeholder="username"
      />
      <label htmlFor="username">Last Name</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        name="lastName"
        value={registerFormData.lastName}
        onChange={(e) => handleInputChange(e)}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        name="email"
        value={registerFormData.email}
        onChange={(e) => handleInputChange(e)}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        name="password"
        type="password"
        value={registerFormData.password}
        onChange={(e) => handleInputChange(e)}
        placeholder="password"
      />
      <label htmlFor="repeatPassword">Repeat Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        name="repeatPassword"
        type="password"
        value={registerFormData.repeatPassword}
        onChange={(e) => handleInputChange(e)}
        placeholder="password"
      />

      <button
        onClick={() => handleRegister("")}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Sign Up
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  );
}
