import { IoArrowForwardSharp } from 'react-icons/io5';

import { Button, Eyebrow } from '@/components';

const Patients = () => {
  return (
    <section
      className="grid grid-cols-2 min-h-[480px] items-center"
      id="patients"
    >
      <div className="flex flex-col gap-2 items-start pr-12">
        <Eyebrow>Patients</Eyebrow>
        {/* SubText */}
        <h2 className="text-4xl tracking-wider mb-2">
          We are dedicated to improving the lives of patients fighting
          life-threatening diseases
        </h2>
        <Button size="lg" variant="link" className="text-primary pl-0">
          <span className="mr-1">More About Us</span>
          <IoArrowForwardSharp size={24} />
        </Button>
      </div>
      <div>Image</div>
    </section>
  );
};

export default Patients;
