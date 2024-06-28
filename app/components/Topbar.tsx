import React from "react";
import { SheetDemo } from "./layout/Sheet";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./layout/Toogle";

const Topbar = () => {
  return (
    <div className="sticky md:hidden  top-0 z-20 w-full flex shadow-md justify-between items-center  py-2 bg-white text-black dark:text-white dark:bg-gray-900">
      <div className="flex justify-between px-2 w-full">
        <SheetDemo />
        <div className="flex gap-4 text-body-medium items-center">
          <UserButton />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
