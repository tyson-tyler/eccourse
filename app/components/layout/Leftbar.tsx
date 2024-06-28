"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constant";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen  left-0  text-black hidden dark:bg-gray-900  dark:text-white top-0 sticky p-5  flex-col gap-16 md:flex">
      <Image src="/logo.png" alt="logo" width={150} height={70} />

      <div className="flex flex-col gap-3">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium px-7  py-5 rounded-md ${
              pathname === link.url ? "bg-blue-500 text-white" : "bg-none"
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
