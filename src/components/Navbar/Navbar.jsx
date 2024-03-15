// import React from 'react';
// import { MdOutlineSearch as SearchIcon } from 'react-icons/md';
// import { Input } from '@/components/ui/input';

const Navbar = () => {
  // const [isSearchOpen, setSearchOpen] = React.useState(false);
  // const searchRef = React.useRef(null);

  // const toggleSearch = () => {
  //   setSearchOpen(!isSearchOpen);
  // };

  // React.useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (searchRef.current && !searchRef.current.contains(event.target)) {
  //       setSearchOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    <nav className="bg-primary py-4 sticky top-0 z-40">
      <div className="container mx-auto flex items-center">
        {/* Logo */}
        <a href="#" className="text-white text-xl font-semibold">
          JVED
          <sub>Tech Medovation</sub>
        </a>

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
