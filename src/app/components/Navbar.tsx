import React from "react";
import { LightLogo } from "../(auth)/dashboard/icons";

const Navbar = () => {
  return (
    <div className="w-full justify-between">
      {LightLogo}
      <nav>
        <ul className="flex gap-8">
          <li className="list-none">
            <a className="text-white no-underline text-lg font-medium" href="#">
              Home
            </a>
          </li>
          <li className="list-none">
            <a className="text-white no-underline text-lg font-medium" href="#">
              About
            </a>
          </li>
          <li className="list-none">
            <a className="text-white no-underline text-lg font-medium" href="#">
              Features
            </a>
          </li>
          <li className="list-none">
            <a className="text-white no-underline text-lg font-medium" href="#">
              Pricing
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <a className="button secondary" href="/dashboard/login">
          Login
        </a>
        <a className="button primary" href="/dashboard/login">
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
