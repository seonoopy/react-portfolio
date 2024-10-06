"use client";

import { PopoverGroup } from "@headlessui/react";

export default function Example() {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://www.cdnlogo.com/logos/s/57/snoopy.svg"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <PopoverGroup className="lg:flex lg:gap-x-12">
          <a
            href="#About"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </a>
          <a
            href="#Skills"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Skills
          </a>
          <a
            href="#Projects"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </a>
        </PopoverGroup>
      </nav>
    </header>
  );
}
