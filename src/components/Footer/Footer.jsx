const Footer = () => {
  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto flex justify-around items-center">
        <a href="#" className="text-white text-xl font-semibold">
          JVEd
          <sub>Tech Medovation</sub>
        </a>
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
      <hr className="container divide-slate-100 my-4" />
      <p className="container text-white text-sm">
        © 2024 JVEd Tech Medovation. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
