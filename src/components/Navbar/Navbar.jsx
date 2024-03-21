// import React from 'react';
// import { MdOutlineSearch as SearchIcon } from 'react-icons/md';
// import { Input } from '@/components/ui/input';

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Logo } from "@/components";
import { useState } from "react";

import { RxHamburgerMenu as MenuIcon } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((p) => !p);
  };

  return (
    <nav className="bg-brand sticky top-0 z-40 py-4">
      <div className="container mx-auto flex justify-between md:items-center">
        <Logo />

        {/* Navigation Links */}
        <ul className="ml-auto mr-6 hidden space-x-6 md:flex">
          <li>
            <a href="#patients" className="text-white hover:text-gray-300">
              Patients
            </a>
          </li>
          <li>
            <a
              href="#healthcare-professionals"
              className="text-white hover:text-gray-300"
            >
              Healthcare Professionals
            </a>
          </li>
          <li>
            <a href="#hospitals" className="text-white hover:text-gray-300">
              Hospitals
            </a>
          </li>
        </ul>

        <Popover open={open} onOpenChange={toggleMenu}>
          <PopoverTrigger className="flex md:hidden">
            <MenuIcon size={24} color="white" />
          </PopoverTrigger>
          <PopoverContent>
            <ul className="flex flex-col space-y-6">
              <li>
                <a
                  href="#patients"
                  onClick={toggleMenu}
                  className="text-primary hover:text-primary/55"
                >
                  Patients
                </a>
              </li>
              <li>
                <a
                  href="#healthcare-professionals"
                  onClick={toggleMenu}
                  className="text-primary hover:text-primary/55"
                >
                  Healthcare Professionals
                </a>
              </li>
              <li>
                <a
                  href="#hospitals"
                  onClick={toggleMenu}
                  className="text-primary hover:text-primary/55"
                >
                  Hospitals
                </a>
              </li>
            </ul>
          </PopoverContent>
        </Popover>

        {/* Search Icon
        <div className="relative h-[32px]" ref={searchRef}>
          <button
            onClick={toggleSearch}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <SearchIcon size={32} />
          </button>
          {isSearchOpen && (
            <div className="absolute bg-transparent shadow-md mt-2  w-48 right-0">
              <Input type="text" placeholder="Search..." />
            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
