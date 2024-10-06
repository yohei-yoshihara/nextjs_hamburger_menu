import { menu } from "@/lib/definitions";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024 TheCompany . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          {menu.map((menu) => {
            return (
              <li key={menu.id} className="hover:underline me-4 md:me-6">
                <Link href={menu.path}>{menu.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
