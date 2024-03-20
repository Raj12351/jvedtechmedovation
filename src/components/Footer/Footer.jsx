import { Logo } from "@/components";

const Footer = () => {
  return (
    <footer className="bg-brand mt-12 pb-4 pt-8">
      <div className="container mx-auto flex items-center justify-around">
        <Logo />
        {/* Navigation Links */}
        <ul className="flex flex-col gap-3">
          <li>
            <a href="#patients" className="text-white hover:text-gray-100">
              Patients
            </a>
          </li>
          <li>
            <a
              href="#healthcare-professionals"
              className="text-white hover:text-gray-100"
            >
              Healthcare Professionals
            </a>
          </li>
          <li>
            <a href="#hospitals" className="text-white hover:text-gray-100">
              Hospitals
            </a>
          </li>
        </ul>
      </div>
      <hr className="container mb-4 mt-8 divide-slate-100" />
      <p className="container text-sm text-white">
        © 2024 JVEd Tech Medovation. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
