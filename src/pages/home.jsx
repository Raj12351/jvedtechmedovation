import HealthcareProfessionals from "@/components/Landing/HealthcareProfessionals";
import Hospitals from "@/components/Landing/Hospitals";
import Patients from "@/components/Landing/Patients";
import Hero from "@/components/Landing/Hero";
import Footer from "@/components/Footer";
import { Navbar } from "@/components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container my-6 flex flex-col gap-6">
        <Patients />
        <HealthcareProfessionals />
        <Hospitals />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
