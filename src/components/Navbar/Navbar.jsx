// import React from 'react';
// import { MdOutlineSearch as SearchIcon } from 'react-icons/md';
// import { Input } from '@/components/ui/input';

import { Logo } from "@/components";

const Navbar = () => {
  return (
    <nav className="bg-brand sticky top-0 z-40 py-4">
      <div className="container mx-auto flex items-center">
        <Logo />

        {/* Navigation Links */}
        <ul className="ml-auto mr-6 flex space-x-6">
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
