"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constant";

export function SheetDemo() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="h-screen mt-5 left-0  text-black  dark:text-white top-0 sticky p-5  flex-col gap-16">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={70}
            className="mb-10"
          />

          <div className="flex flex-col gap-3 h-screen">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.url}>
                <Link
                  href={link.url}
                  key={link.label}
                  className={`flex gap-4 text-body-medium px-7  py-5 rounded-md ${
                    pathname === link.url ? "bg-blue-500 text-white" : "bg-none"
                  }`}
                >
                  {link.icon} <p>{link.label}</p>
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>
        <SheetFooter>
          <div className="flex gap-4 text-body-medium items-center">
            <UserButton />
            <p>Edit Profile</p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
