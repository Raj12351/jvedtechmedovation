import { Navbar } from '@/components';
import Footer from '@/components/Footer';
import HealthcareProfessionals from '@/components/Landing/HealthcareProfessionals';
import Hero from '@/components/Landing/Hero';
import Hospitals from '@/components/Landing/Hospitals';
import Patients from '@/components/Landing/Patients';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Patients />
        <HealthcareProfessionals />
        <Hospitals />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
