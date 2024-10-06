"use client";

import { useState } from "react";
import { menu } from "@/lib/definitions";
import Link from "next/link";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-zinc-800 shadow-sm p-4">
      <div className="text-gray-500 font-bold">TheCompany</div>
      <nav>
        {/* Hamberger Menu */}
        <section className="flex md:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}>
            {/* Menu from Google Font */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>

          {/* Menu for Mobile */}
          <div
            className={
              isNavOpen
                ? "absolute w-full h-full top-0 left-0 bg-zinc-800 z-10 flex flex-col justify-evenly items-center"
                : "hidden"
            }>
            {/* Close Button */}
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}>
              {/* Close from Google Font */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>{" "}
            </div>
            <ul className="flex flex-col items-center h-screen pt-12 m-4 space-y-4">
              {menu.map((menu) => {
                return (
                  <li key={menu.id} className="text-gray-500 hover:underline">
                    <Link href={menu.path} onClick={() => setIsNavOpen(false)}>
                      {menu.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Menu for Desktop */}
        <ul className="hidden space-x-8 md:flex">
          {menu.map((menu) => {
            return (
              <li key={menu.id} className="text-gray-500 hover:underline">
                <Link href={menu.path}>{menu.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
